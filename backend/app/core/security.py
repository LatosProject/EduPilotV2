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
from sqlalchemy.ext.asyncio import AsyncSession

# 设置安全相关的日志记录器
logger = logging.getLogger("core.security")


async def is_admin(
    user: User = Depends(get_current_user),  # 获取当前登录用户（从 JWT 中解析）
    db: AsyncSession = Depends(DatabaseConnector.get_db),  # 获取数据库连接会话
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
    db: AsyncSession = Depends(DatabaseConnector.get_db),  # 获取数据库连接会话
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


async def is_self_or_admin(
    user_uuid: str,
    current_user: User = Depends(get_current_user),  # 当前登录用户
    db: AsyncSession = Depends(DatabaseConnector.get_db),  # 数据库连接
    redis: Redis = Depends(lambda: redis_client),  # Redis 客户端
) -> None:
    """
    验证请求用户是否为本人或管理员。
    优先使用 Redis 缓存角色信息，未命中则回退数据库。

    参数:
        user_uuid: 路由中目标用户的 UUID。
        current_user: 当前认证用户，依赖于 get_current_user。
        db: 数据库连接。
        redis: Redis 客户端。

    异常:
        PermissionDenied: 非本人且非管理员，拒绝访问。
    """
    try:
        logger.info(
            f"检查用户权限: 当前用户 UUID: {current_user.uuid}, 目标 UUID: {user_uuid}"
        )

        # 本人访问，无需进一步判断
        if str(current_user.uuid) == user_uuid:
            logger.debug("当前用户即为请求用户，权限验证通过")
            return

        # 构造 Redis 缓存键
        cache_key = f"auth:role:{current_user.uuid}"

        # 尝试从 Redis 获取角色
        cached_role = await redis.get(cache_key)
        logger.debug(f"缓存角色查询: key={cache_key}, value={cached_role}")

        if not cached_role:
            logger.debug("角色未命中缓存，回退数据库查询")
            role = await get_user_role_by_uuid(db, current_user.uuid)

            if not role:
                logger.warning(f"角色查询失败: UUID: {current_user.uuid}")
                raise exceptions.PermissionDenied("无法获取用户权限")

            # 写入 Redis 缓存，1 小时过期
            await redis.set(cache_key, role, ex=3600)
            cached_role = role

        logger.info(f"当前用户角色: {cached_role}")

        # 判断是否管理员
        if cached_role != "admin":
            raise exceptions.PermissionDenied("非本人或管理员，拒绝访问")

    except exceptions.PermissionDenied:
        raise
    except Exception as e:
        logger.debug(f"权限检查时发生错误: {e}")
        raise exceptions.BaseAppException("Internal Server Error") from e
