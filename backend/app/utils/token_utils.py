# utils/token_utils.py
from datetime import datetime, timedelta, timezone
from typing import Optional
from dotenv import load_dotenv
import os
import jwt

from core import exceptions  


load_dotenv()  # 加载环境变量

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM") 
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))  # Token 过期时间（单位：分钟）

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    """
    生成 JWT 访问令牌（Access Token）

    参数:
        data (dict): 需要编码进令牌的有效负载数据，通常包含用户身份标识等信息。
        expires_delta (Optional[timedelta]): 令牌的过期时长，若不指定则使用默认过期时间（ACCESS_TOKEN_EXPIRE_MINUTES）。

    返回:
        Tuple[str, int]: 返回生成的 JWT 字符串和该令牌剩余有效时间（秒）。

    说明:
        - 令牌中会自动包含“exp”字段，表示过期时间，JWT 解码时会自动校验。
        - 使用 UTC 时间作为过期时间，保证时区一致性。
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
    验证并解码 JWT 访问令牌

    参数:
        token (str): 需要验证的 JWT 字符串。

    返回:
        dict: 令牌解码后的有效负载数据。

    异常:
        exceptions.InvalidVerifyToken: 当令牌无效、过期或解码失败时抛出。

    说明:
        - 使用 SECRET_KEY 和指定算法对令牌进行解码和验证。
        - 验证过程中包含对“exp”字段的自动校验，过期则视为无效。
        - 不捕获具体 jwt 异常，统一抛出自定义异常，便于统一异常处理。
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except:
        raise exceptions.InvalidVerifyToken()


