# core/dependencies.py
import logging
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from utils.token_utils import verify_access_token
from models.user import User 
from schemas.User import User
from services.auth import get_user_by_uuid
from db import get_db
from sqlalchemy.orm import Session

loogger = logging.getLogger("core.dependencies")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

def get_current_user(token: str=Depends(oauth2_scheme),db:Session = Depends(get_db)) -> User:
    try:
        loogger.info("验证访问令牌")
        token_data = verify_access_token(token)
        if not token_data or not token_data.get("uuid"):
            return None
        user = get_user_by_uuid(db, token_data.get("uuid"))
        if not user:
            return None
        loogger.info(f"访问令牌验证成功: uuid={user.uuid} 用户名={user.username}")
        return user
    except Exception:
        return None