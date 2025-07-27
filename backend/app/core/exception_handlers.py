from datetime import datetime, timezone
import logging
from typing import Type

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

"""
core.exception_handlers 模块

定义所有应用层级的自定义异常处理器，统一异常日志、响应结构和 HTTP 状态码。
用于注册到 FastAPI 应用实例中，确保 API 响应一致性、安全性和可观察性。
"""

logger = logging.getLogger("core.exception_handlers")


class ExceptionHandlers:
    @staticmethod
    def _now():
        return datetime.now(timezone.utc).isoformat()

    @classmethod
    def _build_response(
        cls, exc: BaseAppException, log_level: str, log_msg: str | None = None
    ) -> JSONResponse:
        log_func = getattr(logger, log_level, logger.warning)
        message = log_msg or f"{exc.__class__.__name__}: {exc.detail or exc.message}"
        # error级别时打印堆栈
        log_func(message, exc_info=(log_level == "error"))

        error_resp = ErrorResponse(
            status=exc.error_status,
            message=exc.message,
            error=Error(code=exc.code, details=exc.detail),
            meta=Meta(timestamp=cls._now()),
        )
        return JSONResponse(
            status_code=exc.http_status,
            content=error_resp.model_dump(by_alias=True, exclude_none=True),
        )

    @classmethod
    def invalid_verify_token_handler(
        cls, request: Request, exc: InvalidVerifyToken
    ) -> JSONResponse:
        return cls._build_response(
            exc, "warning", f"令牌验证失败，令牌过期或失效: {exc.detail}"
        )

    @classmethod
    def user_not_exists_handler(
        cls, request: Request, exc: UserNotExists
    ) -> JSONResponse:
        user_info = (
            f"UUID: {exc.uuid}"
            if getattr(exc, "uuid", None)
            else f"user: {exc.username}"
        )
        return cls._build_response(
            exc, "warning", f"用户不存在: {user_info}: {exc.detail}"
        )

    @classmethod
    def global_exception_handler(
        cls, request: Request, exc: BaseAppException
    ) -> JSONResponse:
        return cls._build_response(
            exc, "error", f"全局异常: {exc.detail or exc.message}"
        )

    @classmethod
    def authentication_failed_handler(
        cls, request: Request, exc: AuthenticationFailed
    ) -> JSONResponse:
        return cls._build_response(
            exc, "warning", f"登录失败: 用户名或密码错误: {exc.username}"
        )

    @classmethod
    def user_already_exists_handler(
        cls, request: Request, exc: UserAlreadyExists
    ) -> JSONResponse:
        return cls._build_response(exc, "warning", f"用户已存在: {exc.detail}")

    @classmethod
    def permission_denied_handler(
        cls, request: Request, exc: PermissionDenied
    ) -> JSONResponse:
        return cls._build_response(exc, "warning", "操作失败，权限不足")

    @classmethod
    def invalid_parameter_handler(
        cls, request: Request, exc: InvalidParameter
    ) -> JSONResponse:
        return cls._build_response(exc, "warning", "非法提交参数")


# 定义一个异常类与其对应处理函数名称的映射表
exception_type_map: dict[Type[BaseAppException], str] = {
    InvalidVerifyToken: "invalid_verify_token_handler",
    UserNotExists: "user_not_exists_handler",
    BaseAppException: "global_exception_handler",
    AuthenticationFailed: "authentication_failed_handler",
    UserAlreadyExists: "user_already_exists_handler",
    PermissionDenied: "permission_denied_handler",
    InvalidParameter: "invalid_parameter_handler",
}

exception_handler_map = {}

# 遍历异常类型和其对应处理器方法名的映射
for exc_type, handler_name in exception_type_map.items():
    handler_func = getattr(ExceptionHandlers, handler_name)
    exception_handler_map[exc_type] = handler_func
    globals()[handler_name] = handler_func
