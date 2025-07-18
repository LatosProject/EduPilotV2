# routers/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from models.user import UserCreate, UserOut
from schemas.token import TokenResponse
from services.auth_service import authenticate_user, create_access_token, get_current_user

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login", response_model=TokenResponse)
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token(user.id)
    return {
        "access_token": access_token,
        "refresh_token": "TODO",
        "expires_in": 3600,
        "token_type": "bearer"
    }

@router.post("/register", response_model=UserOut)
def register(user_in: UserCreate):
    # 注册逻辑（检查重复邮箱、哈希密码、写入数据库）
    ...

@router.get("/me", response_model=UserOut)
def read_me(current_user = Depends(get_current_user)):
    return current_user

@router.post("/refresh-token", response_model=TokenResponse)
def refresh_token():
    # 刷新逻辑
    ...
