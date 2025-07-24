from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from redis.asyncio import Redis
from core.dependencies import get_current_user
from db import get_db
from services.auth import get_user_role_by_uuid
from core.redis import redis_client
from schemas.User import User


async def is_admin(
    user: User = Depends(get_current_user),             
    db: Session = Depends(get_db),   
    redis: Redis = Depends(lambda: redis_client)
) -> None:
    try:
        uuid = user.uuid
        if not uuid:
            return None
        cache_key = f"auth:role:{uuid}"
        cached_role = await redis.get(cache_key)
        if not cached_role:
            role = get_user_role_by_uuid(db, uuid)
            if not role:
                return None
            await redis.set(cache_key, role, ex=3600)
            cached_role = role
        return cached_role == "admin"

    except Exception:
        return None
