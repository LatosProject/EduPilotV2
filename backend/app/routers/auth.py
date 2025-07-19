# routers/auth.py
from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordRequestForm
from schemas.User import User
from schemas.Response import LoginResponse,ErrorResponse,Error,Meta,LoginData,LoginRequest
from services.auth import authenticate_user
from utils.token_utils import create_access_token
from sqlalchemy.orm import Session
from typing import Union
from db import get_db
router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login", response_model=Union[LoginResponse,ErrorResponse])
def login(form_data: LoginRequest,db: Session = Depends(get_db)):

    user = authenticate_user(db,form_data.username, form_data.password)
    if not user:
        error_resp=ErrorResponse(
            status=1,
            message="Invalid username or password",
            error=Error(code= 400, details="Authentication failed"),
            meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
        )
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content=error_resp.model_dump(by_alias=True,exclude_none=True))
    # 生成访问令牌
    token, expires_in = create_access_token({"sub": str(user.uuid)})

    success_resp = LoginResponse(
    status=0,
    message="Login successful",
    data=LoginData(
        token=token,
        expires_in=expires_in,
        user=User(
            uuid=user.uuid,
            username=user.username,
            email=user.email,
            role=user.role,
            status=user.status,
            created_at=user.created_at.isoformat(),
            last_login=user.last_login.isoformat()
        )
    ),
    meta=Meta(timestamp=datetime.now(timezone.utc).isoformat())
)

    return JSONResponse(status_code=200, content=success_resp.model_dump(by_alias=True))

