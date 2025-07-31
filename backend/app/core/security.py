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


async def get_role_with_cache(
    uuid: str,
    db: AsyncSession,
    redis: Redis,
    cache_expire: int = 3600,
) -> str:
    cache_key = f"auth:role:{uuid}"
    cached_role = await redis.get(cache_key)
    if cached_role:
        return cached_role.decode() if isinstance(cached_role, bytes) else cached_role
    role = await get_user_role_by_uuid(db, uuid)
    if not role:
        raise exceptions.PermissionDenied("无法获取用户权限")
    await redis.set(cache_key, role, ex=cache_expire)
    return role


async def is_admin(
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    redis: Redis = Depends(lambda: redis_client),
):
    if not user.uuid:
        raise exceptions.InvalidVerifyToken()
    role = await get_role_with_cache(user.uuid, db, redis)
    if role != "admin":
        raise exceptions.PermissionDenied()


async def is_teacher(
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    redis: Redis = Depends(lambda: redis_client),
):
    if not user.uuid:
        raise exceptions.InvalidVerifyToken()
    role = await get_role_with_cache(user.uuid, db, redis)
    if role != "teacher":
        raise exceptions.PermissionDenied()


async def is_self_or_admin(
    user_uuid: str,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    redis: Redis = Depends(lambda: redis_client),
):
    if str(current_user.uuid) == user_uuid:
        return
    role = await get_role_with_cache(current_user.uuid, db, redis)
    if role != "admin":
        raise exceptions.PermissionDenied("非本人或管理员，拒绝访问")
