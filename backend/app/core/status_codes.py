from enum import Enum

class ErrorCode(int, Enum):
    SUCCESS = 0                # 成功
    PARAMETER_ERROR = 1001     # 参数错误
    AUTHENTICATION_FAILED = 1002  # 认证失败
    PERMISSION_DENIED = 1003      # 权限不足
    RESOURCE_NOT_FOUND = 1004     # 资源不存在
    INTERNAL_SERVER_ERROR = 1005  # 系统内部错误
