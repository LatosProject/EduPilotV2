from typing import Callable
from fastapi import HTTPException, Request
from core.redis import redis_client

def rate_limiter(limit:int=5,windows:int=60)->Callable:
    async def _limiter(request: Request):
        ip = request.client.host
        path = request.url.path
        key = f"rate_limit:{ip}:{path}"
        count = await redis_client.incr(key)
        if count == 1:
            await redis_client.expire(key, windows)
        if count > limit:
            raise HTTPException(
                status_code=429,
                detail=f"Too many requests, please try again later."
            )
    return _limiter 