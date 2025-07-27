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
    AuthenticationFailed,
    PermissionDenied,
    UserAlreadyExists,
    InvalidParameter

)

logger = logging.getLogger("core.exception_handlers")


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
    logger.warning(
        f"用户不存在: {f'UUID: {exc.uuid}' if getattr(exc, 'uuid', None) else f'user: {exc.username}'}: {exc.detail}"
    )
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


def authentication_failed_handler(request: Request, exc: AuthenticationFailed):
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

def user_already_exists_handler(request: Request, exc: UserAlreadyExists):
    logger.warning(f"用户已存在")
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


def permission_denied_handler(request: Request, exc: PermissionDenied):
    logger.warning(f"操作失败，只有管理员可以执行")
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

def invalid_parameter_handler(request: Request, exc:InvalidParameter):
    logger.warning(f"非法提交参数")    
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
