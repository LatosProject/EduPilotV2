from passlib.context import CryptContext

# 定义加密上下文，使用 bcrypt 算法
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    """
    将明文密码加密成哈希字符串
    """
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    验证明文密码和哈希密码是否匹配
    """
    return pwd_context.verify(plain_password, hashed_password)
