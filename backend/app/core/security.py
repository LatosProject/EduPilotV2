from fastapi import Depends
from sqlalchemy.orm import Session
from redis.asyncio import Redis
from core import exceptions
from core.dependencies import get_current_user
from db.connector import DatabaseConnector
from services.auth import get_user_role_by_uuid
from core.redis import redis_client
from schemas.User import User
import logging

# 设置安全相关的日志记录器
logger = logging.getLogger("core.security")


async def is_admin(
    user: User = Depends(get_current_user),  # 获取当前登录用户（从 JWT 中解析）
    db: Session = Depends(DatabaseConnector.get_db),  # 获取数据库连接会话
    redis: Redis = Depends(lambda: redis_client),  # 获取 Redis 客户端（异步）
) -> None:
    """
    检查当前用户是否为管理员。
    支持 Redis 缓存，如果缓存命中则不查询数据库。

    参数:
        user: 当前认证的用户对象，依赖于 get_current_user。
        db: 数据库会话对象。
        redis: Redis 客户端。

    返回:
        True 表示管理员；False 或 None 表示不是或查询失败。
    """
    try:
        logger.info(f"检查用户是否为管理员: 用户名: {user.username}, UUID: {user.uuid}")

        # 提取 UUID（是管理员判断的关键字段）
        uuid = user.uuid
        if not uuid:
            logger.warning("用户UUID无效，无法检查管理员权限")
            raise exceptions.InvalidVerifyToken()

        # 构造 Redis 缓存键
        cache_key = f"auth:role:{uuid}"

        # 尝试从 Redis 缓存中获取角色信息
        logger.debug(f"使用 Redis 缓存检查用户角色: UUID: {uuid}")
        cached_role = await redis.get(cache_key)

        # 如果未命中缓存，从数据库中查询角色
        if not cached_role:
            logger.debug(f"Redis 缓存未命中，查询数据库: UUID: {uuid}")
            role = await get_user_role_by_uuid(db, uuid)

            if not role:
                logger.warning(f"用户角色查询失败: UUID: {uuid}")
                raise exceptions.PermissionDenied()

            # 写入缓存，有效期 3600 秒（1 小时）
            await redis.set(cache_key, role, ex=3600)
            cached_role = role

        logger.info(f"用户角色: {cached_role}")

        # 判断角色是否为管理员
        if cached_role != "admin":
            raise exceptions.PermissionDenied()
    except exceptions.PermissionDenied:
        raise
    except Exception as e:
        # 静默失败，不抛出异常（可调整为 raise HTTPException 如有需要）
        logger.debug(f"Redis 缓存错误 {e}")
        raise exceptions.BaseAppException("Internal Server Error") from e


async def is_teacher(
    user: User = Depends(get_current_user),  # 获取当前登录用户（从 JWT 中解析）
    db: Session = Depends(DatabaseConnector.get_db),  # 获取数据库连接会话
    redis: Redis = Depends(lambda: redis_client),  # 获取 Redis 客户端（异步）
) -> None:
    """
    检查当前用户是否为教师。
    支持 Redis 缓存，如果缓存命中则不查询数据库。

    参数:
        user: 当前认证的用户对象，依赖于 get_current_user。
        db: 数据库会话对象。
        redis: Redis 客户端。

    返回:
        True 表示教师；False 或 None 表示不是或查询失败。
    """
    try:
        logger.info(f"检查用户是否为教师: 用户名: {user.username}, UUID: {user.uuid}")

        # 提取 UUID（是教师判断的关键字段）
        uuid = user.uuid
        if not uuid:
            logger.warning("用户UUID无效，无法检查教师权限")
            raise exceptions.InvalidVerifyToken()

        # 构造 Redis 缓存键
        cache_key = f"auth:role:{uuid}"

        # 尝试从 Redis 缓存中获取角色信息
        logger.debug(f"使用 Redis 缓存检查用户角色: UUID: {uuid}")
        cached_role = await redis.get(cache_key)

        # 如果未命中缓存，从数据库中查询角色
        if not cached_role:
            logger.debug(f"Redis 缓存未命中，查询数据库: UUID: {uuid}")
            role = await get_user_role_by_uuid(db, uuid)

            if not role:
                logger.warning(f"用户角色查询失败: UUID: {uuid}")
                raise exceptions.PermissionDenied()

            # 写入缓存，有效期 3600 秒（1 小时）
            await redis.set(cache_key, role, ex=3600)
            cached_role = role

        logger.info(f"用户角色: {cached_role}")

        # 判断角色是否为教师
        if cached_role != "teacher":
            raise exceptions.PermissionDenied()
    except exceptions.PermissionDenied:
        raise
    except Exception as e:
        # 静默失败，不抛出异常（可调整为 raise HTTPException 如有需要）
        logger.debug(f"Redis 缓存错误 {e}")
        raise exceptions.BaseAppException("Internal Server Error") from e
