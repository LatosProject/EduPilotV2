from datetime import datetime, timezone
import logging
from typing import Callable

from fastapi import Request
from fastapi.responses import JSONResponse

from schemas.Response import Error, ErrorResponse, Meta
from core.exceptions import (
    BaseAppException,
    InvalidVerifyToken,
    UserNotExists,
    AuthenticationFailed,
    PermissionDenied,
    UserAlreadyExists,
    InvalidParameter,
)

logger = logging.getLogger("core.exception_handlers")


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def build_response(
    exc: BaseAppException,
    log_func: Callable[[str], None],
    log_msg: str | None = None,
) -> JSONResponse:
    message = log_msg or f"{exc.__class__.__name__}: {exc.detail or exc.message}"
    log_func(message, exc_info=(log_func == logger.error))

    error_resp = ErrorResponse(
        status=exc.error_status,
        message=exc.message,
        error=Error(code=exc.code, details=exc.detail),
        meta=Meta(timestamp=now_iso()),
    )
    return JSONResponse(
        status_code=exc.http_status,
        content=error_resp.model_dump(by_alias=True, exclude_none=True),
    )


async def invalid_verify_token_handler(
    request: Request, exc: InvalidVerifyToken
) -> JSONResponse:
    return build_response(
        exc,
        logger.warning,
        f"令牌验证失败，令牌过期或失效: {exc.detail}",
    )


async def user_not_exists_handler(request: Request, exc: UserNotExists) -> JSONResponse:
    user_info = (
        f"UUID: {exc.uuid}" if getattr(exc, "uuid", None) else f"user: {exc.username}"
    )
    return build_response(
        exc,
        logger.warning,
        f"用户不存在: {user_info}: {exc.detail}",
    )


async def global_exception_handler(
    request: Request, exc: BaseAppException
) -> JSONResponse:
    return build_response(
        exc,
        logger.error,
        f"全局异常: {exc.detail or exc.message}",
    )


async def authentication_failed_handler(
    request: Request, exc: AuthenticationFailed
) -> JSONResponse:
    return build_response(
        exc,
        logger.warning,
        f"登录失败: 用户名或密码错误: {exc.username}",
    )


async def user_already_exists_handler(
    request: Request, exc: UserAlreadyExists
) -> JSONResponse:
    return build_response(
        exc,
        logger.warning,
        f"用户已存在: {exc.detail}",
    )


async def permission_denied_handler(
    request: Request, exc: PermissionDenied
) -> JSONResponse:
    return build_response(
        exc,
        logger.warning,
        "操作失败，权限不足",
    )


async def invalid_parameter_handler(
    request: Request, exc: InvalidParameter
) -> JSONResponse:
    return build_response(
        exc,
        logger.warning,
        "非法提交参数",
    )


exception_handler_map = {
    InvalidVerifyToken: invalid_verify_token_handler,
    UserNotExists: user_not_exists_handler,
    BaseAppException: global_exception_handler,
    AuthenticationFailed: authentication_failed_handler,
    UserAlreadyExists: user_already_exists_handler,
    PermissionDenied: permission_denied_handler,
    InvalidParameter: invalid_parameter_handler,
}


def register_exception_handlers(app):
    for exc_type, handler in exception_handler_map.items():
        app.add_exception_handler(exc_type, handler)
