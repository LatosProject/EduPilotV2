from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from redis.asyncio import Redis
from core.dependencies import get_current_user
from db import DatabaseConnector
from services.auth import get_user_role_by_uuid
from core.redis import redis_client
from schemas.User import User
import logging

logger = logging.getLogger("core.security")


async def is_admin(
    user: User = Depends(get_current_user),
    db: Session = Depends(DatabaseConnector.get_db),
    redis: Redis = Depends(lambda: redis_client),
) -> None:
    try:
        logger.info(f"检查用户是否为管理员: 用户名: {user.username}, UUID: {user.uuid}")
        uuid = user.uuid
        if not uuid:
            logger.warning("用户UUID无效，无法检查管理员权限")
            return None
        logger.debug(f"使用 Redis 缓存检查用户角色: UUID: {uuid}")
        cache_key = f"auth:role:{uuid}"
        cached_role = await redis.get(cache_key)
        if not cached_role:
            logger.debug(f"Redis 缓存未命中，查询数据库: UUID: {uuid}")
            role = get_user_role_by_uuid(db, uuid)
            if not role:
                logger.warning(f"用户角色查询失败: UUID: {uuid}")
                return None
            await redis.set(cache_key, role, ex=3600)
            cached_role = role
        logger.info(f"用户角色: {cached_role}")
        return cached_role == "admin"

    except Exception:
        return None
