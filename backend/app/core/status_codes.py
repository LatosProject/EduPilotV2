from enum import Enum

"""
    全局统一错误码定义枚举。
    继承自 int 和 Enum，方便与状态码和数据库等数值交互。

    设计思路：
    - 0 表示成功
    - 1xxx 开头表示不同类别的业务错误
    - 保持错误码唯一，便于前后端和日志统一识别
"""


class ErrorCode(int, Enum):
    SUCCESS = 0  # 成功
    PARAMETER_ERROR = 1001  # 参数错误
    AUTHENTICATION_FAILED = 1002  # 认证失败
    PERMISSION_DENIED = 1003  # 权限不足
    RESOURCE_NOT_FOUND = 1004  # 资源不存在
    INTERNAL_SERVER_ERROR = 1005  # 系统内部错误
