# utils/token_utils.py
from datetime import datetime, timedelta, timezone
from typing import Optional
from dotenv import load_dotenv
import os
import jwt  


load_dotenv()  # 加载环境变量

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM") 
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))  # Token 过期时间（单位：分钟）

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    """
    生成 JWT Token
    参数：
      - data: 要编码进 token 的信息（通常是用户 id、角色等）
      - expires_delta: token 过期时间（timedelta 类型），默认1小时
    返回：
      - 加密的 JWT 字符串
    """
    to_encode = data.copy()

    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode.update({"exp": expire})

    # 生成 token
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    expires_in = int((expire - datetime.now(timezone.utc)).total_seconds())

    return encoded_jwt, expires_in


def verify_access_token(token: str) -> dict:
    """
    验证 JWT Token，有效则返回解码后的数据，否则抛出异常
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except:
        pass


