# core/dependencies.py
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from utils.token_utils import verify_access_token
from models.user import User 
from schemas.User import User
from services.auth import get_user_by_username
from db import get_db
from sqlalchemy.orm import Session


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

def get_current_user(token: str=Depends(oauth2_scheme),db:Session = Depends(get_db)) -> User:
    try:
        token_data = verify_access_token(token)
        if not token_data or not token_data.get("username"):
            return None
        user = get_user_by_username(db, token_data.get("username"))
        if not user:
            return None
        return user
    except Exception:
        return None