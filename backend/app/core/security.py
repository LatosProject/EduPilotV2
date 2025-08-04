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
"""
权限校验依赖模块

该模块提供一组用于 FastAPI 依赖注入的异步函数，主要用于基于用户角色的访问控制。

核心功能：
- 结合 Redis 缓存和数据库，异步获取用户角色，避免频繁数据库查询，提升性能。
- 提供多种角色校验依赖：
  - is_admin：确保当前用户为管理员
  - is_teacher：确保当前用户为教师
  - is_self_or_admin：确保当前用户是目标用户本人或管理员
  - is_teacher_or_admin：确保当前用户为教师或管理员
- 校验过程中如发现无效令牌或权限不足，抛出相应业务异常，由全局异常处理器统一响应。

设计要点：
- 角色数据通过 Redis 缓存，默认缓存1小时，防止数据库压力过大。
- 角色权限判断基于字符串匹配，便于扩展多种角色。
- 采用 FastAPI 的 Depends 机制，无侵入地嵌入路由函数，确保安全。
- 异常处理使用自定义业务异常，提升接口一致性和错误可追踪性。
- 日志模块专门用于安全相关事件，便于后续审计与排查。

使用示例：
```python
@router.get("/admin-only")
async def admin_endpoint(
    _: None = Depends(is_admin)
):
    return {"message": "只有管理员能访问"}
"""

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


async def is_teacher_or_admin(
    user: User = Depends(get_current_user),
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    redis: Redis = Depends(lambda: redis_client),
):
    if not user.uuid:
        raise exceptions.InvalidVerifyToken()

    role = await get_role_with_cache(user.uuid, db, redis)

    # 检查角色是否在允许的列表中
    if role not in ["teacher", "admin"]:
        raise exceptions.PermissionDenied("非教师或管理员，拒绝访问")
