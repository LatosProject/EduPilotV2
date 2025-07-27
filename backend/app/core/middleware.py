from fastapi import FastAPI, Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
import logging
import time
import traceback

logger = logging.getLogger("core.middleware")


class AccessLogMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start_time = time.time()

        # 获取真实客户端 IP（支持反向代理）
        x_forwarded_for = request.headers.get("X-Forwarded-For")
        if x_forwarded_for:
            client_ip = x_forwarded_for.split(",")[0].strip()
        else:
            client_ip = request.client.host

        method = request.method
        path = request.url.path

        logger.info(f"请求开始 - {client_ip} {method} {path}")

        try:
            response = await call_next(request)
        except Exception as exc:
            tb = traceback.format_exc()
            logger.error(
                f"请求异常 - {client_ip} {method} {path} 错误: {exc}\n堆栈信息:\n{tb}"
            )
            raise

        process_time_ms = (time.time() - start_time) * 1000
        status_code = response.status_code

        logger.info(
            f"请求结束 - {client_ip} {method} {path} 状态码: {status_code} 耗时: {process_time_ms:.2f}ms"
        )

        return response
