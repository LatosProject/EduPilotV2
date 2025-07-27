from typing import Any

from core.status_codes import ErrorCode
from fastapi import status

# TO-DO


class BaseAppException(Exception):
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


class UserAlreadyExists(BaseAppException):
    """用户已存在"""
    code = 400
    error_status=ErrorCode.PARAMETER_ERROR
    http_status=status.HTTP_400_BAD_REQUEST
    message="User registration failed"
    detail="User already exists or invalid data"


class UserNotExists(BaseAppException):
    """用户不存在"""

    code = 400
    error_status = ErrorCode.RESOURCE_NOT_FOUND
    http_status = status.HTTP_400_BAD_REQUEST
    message = "User not found"
    detail = "User does not exist"

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
    error_status=ErrorCode.PERMISSION_DENIED
    http_status=status.HTTP_403_FORBIDDEN
    message="User registration failed"
    detail = "Only admin can register users"



class RateLimitExceeded(BaseAppException):
    """请求频率过快，被限流"""

    pass


class DatabaseQueryError(BaseAppException):
    pass


class InvalidParameter(Exception):
    code = 400
    error_status = ErrorCode.PARAMETER_ERROR
    http_status = 400
    message = "Invalid parameter"
    detail = "One or more parameters are invalid or missing"
