from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from utils.auth_utils import verify_access_token
from models.user import User 
from schemas.User import User

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

def get_current_user(token: str = Depends(oauth2_scheme)):
    token_data = verify_access_token(token)
    user = get_user_by_username(token_data.uuid) 

def get_user_by_username(username: str):
    pass