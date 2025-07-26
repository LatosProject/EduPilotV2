from typing import Any

from core.status_codes import ErrorCode
from fastapi import status

# TO-DO

class BaseAppException(Exception):
    http_status: int = 500
    error_status: int = 1005
    message: str = "Internal Server Error"
    detail: str = None
    def __init__ (self,detail:str=None):
        if detail:
            self.detail = detail
        super().__init__(self.message)

class InvalidID(BaseAppException):
    """无效的用户ID"""
    pass


class UserAlreadyExists(BaseAppException):
    """用户已存在"""
    def __init__(self,uuid:str):
        self.uuid=uuid
        super().__init__()


class UserNotExists(BaseAppException):
    """用户不存在"""
    code = 404
    error_status = ErrorCode.RESOURCE_NOT_FOUND
    http_status =status.HTTP_404_NOT_FOUND
    message="User not found"
    detail="User does not exist"
    pass


class InvalidVerifyToken(BaseAppException):
    """无效或过期的验证令牌"""
    code = 401
    error_status = ErrorCode.AUTHENTICATION_FAILED
    http_status =status.HTTP_401_UNAUTHORIZED
    message="Authentication failed"
    detail="Invalid refresh token"
    pass


class InvalidPasswordException(BaseAppException):
    """密码校验失败，含详细原因"""
    pass


class AuthenticationFailed(BaseAppException):
    """认证失败，用户名或密码错误"""
    pass


class PermissionDenied(BaseAppException):
    """权限不足，操作被拒绝"""
    pass


class RateLimitExceeded(BaseAppException):
    """请求频率过快，被限流"""
    pass

class DatabaseQueryError(BaseAppException):
    pass