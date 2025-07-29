from typing import Any

from core.status_codes import ErrorCode
from fastapi import status

"""
core.exceptions 模块

定义应用的基础业务异常类型体系，统一控制：
- 错误码（code）
- HTTP 状态码（http_status）
- 应用内错误状态码（error_status）
- 错误信息（message, detail）

所有业务异常均继承自 BaseAppException，供 FastAPI 异常处理器捕获。
"""


class BaseAppException(Exception):
    """
    所有业务异常的基类，封装错误响应的标准结构。

    属性:
        code (int): 内部错误码，客户端可识别错误类型（如 400、500）
        http_status (int): 返回给前端的 HTTP 状态码（如 401、403）
        error_status (int): 应用级错误状态码（配合业务语义设计）
        message (str): 错误简述（前端展示用）
        detail (str): 错误详情（供开发或日志使用）

    说明:
        所有自定义业务异常都应继承该类，并重写必要字段。
    """

    code: int = 500
    http_status: int = 500
    error_status: int = 1005
    message: str = "Internal Server Error"
    detail: str = None

    def __init__(self, detail: str = None):
        if detail:
            self.detail = detail
        super().__init__(self.message)


class InvalidID(BaseAppException):
    """无效的用户ID"""

    pass


class AlreadyExists(BaseAppException):
    """资源已存在"""

    code = 400
    error_status = ErrorCode.PARAMETER_ERROR
    http_status = status.HTTP_400_BAD_REQUEST
    message = "创建失败"
    detail = "资源已存在或数据无效"


class NotExists(BaseAppException):
    """资源不存在"""

    code = 404
    error_status = ErrorCode.RESOURCE_NOT_FOUND
    http_status = status.HTTP_404_NOT_FOUND
    message = "资源未找到"
    detail = "资源不存在或已被删除"

    def __init__(self, *, uuid: str = None, username: str = None):
        self.uuid = uuid
        self.username = username
        super().__init__()


class InvalidVerifyToken(BaseAppException):
    """无效或过期的验证令牌"""

    code = 401
    error_status = ErrorCode.AUTHENTICATION_FAILED
    http_status = status.HTTP_401_UNAUTHORIZED
    message = "Authentication failed"
    detail = "Invalid token"


class InvalidPasswordException(BaseAppException):
    """密码校验失败(修改密码)，含详细原因"""


class AuthenticationFailed(BaseAppException):
    """认证失败，用户名或密码错误"""

    code = 400
    error_status = ErrorCode.AUTHENTICATION_FAILED
    http_status = status.HTTP_400_BAD_REQUEST
    message = "Invalid username or password"
    detail = "Authentication failed"

    def __init__(self, *, username: str = None):
        self.username = username
        super().__init__()


class PermissionDenied(BaseAppException):
    """权限不足，操作被拒绝"""

    code = 403
    error_status = ErrorCode.PERMISSION_DENIED
    http_status = status.HTTP_403_FORBIDDEN
    message = "Permission denied"
    detail = "You do not have permission to perform this action"


class RateLimitExceeded(BaseAppException):
    """请求频率过快，被限流"""

    code = 429
    detail = "请求频率过快，请稍后重试"
    http_status = 429
    error_status = ErrorCode.TOO_MANY_REQUESTS
    message = "Too many requests. Please try again later"


class DatabaseQueryError(BaseAppException):
    pass


class InvalidParameter(Exception):
    code = 400
    error_status = ErrorCode.PARAMETER_ERROR
    http_status = 400
    message = "Invalid parameter"
    detail = "One or more parameters are invalid or missing"
