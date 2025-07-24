import logging
from typing import Callable
from fastapi import HTTPException, Request
from core.redis import redis_client

logger = logging.getLogger("core.rate_limit")

def rate_limiter(limit:int=5,windows:int=60)->Callable:
    async def _limiter(request: Request):
        logger.info(f"频率限制检查: IP: {request.client.host}, 路径: {request.url.path}, 限制: {limit}次/{windows}秒")
        ip = request.client.host
        path = request.url.path
        key = f"rate_limit:{ip}:{path}"
        count = await redis_client.incr(key)
        if count == 1:
            await redis_client.expire(key, windows)
            logger.debug(f"首次请求，设置过期时间: {windows}秒（Key: {key}）")
        if count > limit:
            logger.warning(f"请求超出频率限制: IP: {ip}, 路径: {path}, 当前计数: {count}, 限制: {limit}")
            raise HTTPException(
                status_code=429,
                detail=f"Too many requests, please try again later."
            )
    return _limiter 