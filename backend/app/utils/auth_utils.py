# utils/auth_utils.py
from passlib.context import CryptContext

# 定义加密上下文，使用 bcrypt 算法
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    """
    对明文密码进行哈希加密

    参数:
        password (str): 用户输入的明文密码。

    返回:
        str: 加密后的哈希密码字符串。

    说明:
        - 使用 bcrypt 算法进行哈希，确保密码安全存储。
        - hash 函数内部自动处理盐值生成。
        - 不建议明文密码存储或传输，必须先调用此函数加密。
    """
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    校验明文密码是否与哈希密码匹配

    参数:
        plain_password (str): 用户输入的明文密码。
        hashed_password (str): 数据库中存储的哈希密码。

    返回:
        bool: 匹配返回 True，否则返回 False。

    说明:
        - 通过 bcrypt 算法进行校验，自动处理盐值和算法细节。
        - 仅用于验证登录等场景，不用于生成新哈希。
    """
    return pwd_context.verify(plain_password, hashed_password)
