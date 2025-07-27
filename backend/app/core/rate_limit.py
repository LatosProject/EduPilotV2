import logging
from typing import Callable
from fastapi import HTTPException, Request
from core.redis import redis_client  # 引入 Redis 异步客户端

# 设置日志记录器，用于记录限流相关事件
logger = logging.getLogger("core.rate_limit")


def rate_limiter(limit: int = 5, windows: int = 60) -> Callable:
    """
    创建一个基于 IP + 路径 的限流器依赖项，用于 FastAPI 的依赖注入系统。

    参数:
        limit (int): 时间窗口内的最大请求次数（默认 5 次）。
        windows (int): 限流窗口的持续时间，单位为秒（默认 60 秒）。

    返回:
        Callable: 可注入到路由中的异步限流函数。
    """

    async def _limiter(request: Request):
        # 日志记录当前请求的限流检查信息
        logger.info(
            f"频率限制检查: IP: {request.client.host}, 路径: {request.url.path}, 限制: {limit}次/{windows}秒"
        )

        ip = request.client.host  # 获取客户端 IP
        path = request.url.path  # 获取请求路径
        key = f"rate_limit:{ip}:{path}"  # 构造 Redis Key（以 IP+路径区分）

        # 对应 key 自增计数（如果 key 不存在，会自动创建，初始值为 1）
        count = await redis_client.incr(key)

        # 如果是首次请求，设置 Redis key 的过期时间
        if count == 1:
            await redis_client.expire(key, windows)
            logger.debug(f"首次请求，设置过期时间: {windows}秒（Key: {key}）")

        # 如果请求次数超过设定限制，则拒绝访问
        if count > limit:
            logger.warning(
                f"请求超出频率限制: IP: {ip}, 路径: {path}, 当前计数: {count}, 限制: {limit}"
            )
            raise HTTPException(
                status_code=429,  # Too Many Requests
                detail="Too many requests, please try again later.",
            )

    return _limiter
