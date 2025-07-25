# TO-DO: Implement user registration endpoint

from datetime import datetime, timezone
import logging
from fastapi import APIRouter, Depends, status
from typing import Union

from fastapi.responses import JSONResponse
from core.security import is_admin
from core.dependencies import get_current_user
from services.auth import create_user
from db import get_db
from schemas.Response import ApiResponse, Error, ErrorResponse, Meta, RegisterRequest
from schemas.User import UserProfile
from sqlalchemy.orm import Session

router = APIRouter(prefix="/users", tags=["Users"])
logger = logging.getLogger("routers.users")

@router.post("/", response_model=Union[ApiResponse,UserProfile])  
def register(form_data: RegisterRequest,db: Session = Depends(get_db),is_admin_user: bool = Depends(is_admin)):
    # TO-DO :Need to check the redis
    if is_admin_user:
        logger.info(f"用户注册请求: 用户名: {form_data.username}, 角色: {form_data.role}")
        user = create_user(
            db=db,
            username=form_data.username,
            email=form_data.email,
            password=form_data.password,
            profile_name=form_data.profile.profile_name,
            avatar_url=form_data.profile.avatar_url,
            role=form_data.role
        )
        if user is None:
            logger.warning(f"用户注册失败: 用户名已存在或数据无效: {form_data.username}")
            error_resp = ErrorResponse(
            status=1,
            message="User registration failed",
            error=Error(code=400, details="User already exists or invalid data"),
            meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),)
            return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST, content=error_resp.model_dump(by_alias=True, exclude_none=True))
        logger.info(f"用户注册成功: 用户名: {user.username}, UUID: {user.uuid}")
        success_resp = ApiResponse(
            status=0,
            message="User registered successfully",
            data={},
            meta=Meta(timestamp=datetime.now(timezone.utc).isoformat())
            )
        return JSONResponse(status_code=status.HTTP_201_CREATED, content=success_resp.model_dump(by_alias=True, exclude_none=True))
    else:
            logger.warning(f"用户名:{form_data.username}注册失败，只有管理员可以注册用户")
            error_resp = ErrorResponse(
            status=1,
            message="User registration failed",
            error=Error(code=403, details="Only admin can register users"),
            meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
        )
            return JSONResponse(status_code=status.HTTP_403_FORBIDDEN, content=error_resp.model_dump(by_alias=True, exclude_none=True))