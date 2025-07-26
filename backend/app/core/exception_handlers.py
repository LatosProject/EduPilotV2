from datetime import datetime, timezone
import logging

from fastapi import Request, status
from fastapi.responses import JSONResponse

from core.status_codes import ErrorCode
from schemas.Response import Error, ErrorResponse, Meta
from core.exceptions import (
    BaseAppException,
    InvalidVerifyToken,
    UserNotExists,
    InvalidPasswordException,
)

logger = logging.getLogger("exception_handlers")


# TO-DO
def _now():
    return datetime.now(timezone.utc).isoformat()


def invalid_verify_token_handler(request: Request, exc: InvalidVerifyToken):
    logger.warning(f"令牌验证失败，令牌过期或失效: {exc.detail}")
    error_resp = ErrorResponse(
        status=exc.error_status,
        message=exc.message,
        error=Error(code=exc.code, details=exc.detail),
        meta=Meta(timestamp=_now()),
    )
    return JSONResponse(
        status_code=exc.http_status,
        content=error_resp.model_dump(by_alias=True, exclude_none=True),
    )


def user_not_exists_handler(request: Request, exc: UserNotExists):
    logger.warning(f"用户不存在: UUID: {exc.uuid}: {exc.detail}")
    error_resp = ErrorResponse(
        status=exc.error_status,
        message=exc.message,
        error=Error(code=exc.code, details=exc.detail),
        meta=Meta(timestamp=_now()),
    )
    return JSONResponse(
        status_code=exc.http_status,
        content=error_resp.model_dump(by_alias=True, exclude_none=True),
    )


def global_exception_handler(request: Request, exc: BaseAppException):
    logger.error(f"全局异常: {exc.detail or exc.message}", exc_info=True)
    error_resp = ErrorResponse(
        status=exc.error_status,
        message=exc.message,
        error=Error(code=exc.code, details=exc.detail),
        meta=Meta(timestamp=_now()),
    )
    return JSONResponse(
        status_code=exc.http_status,
        content=error_resp.model_dump(by_alias=True, exclude_none=True),
    )


def invalid_password_handler(request: Request, exc: InvalidPasswordException):
    logger.warning(f"登录失败: 用户名或密码错误: {exc.username}")
    error_resp = ErrorResponse(
        status=exc.error_status,
        message=exc.message,
        error=Error(code=exc.code, details=exc.detail),
        meta=Meta(timestamp=_now()),
    )
    return JSONResponse(
        status_code=exc.http_status,
        content=error_resp.model_dump(by_alias=True, exclude_none=True),
    )
