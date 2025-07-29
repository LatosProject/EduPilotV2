# TO-DO: Implement user registration endpoint

from datetime import datetime, timezone
import logging
from fastapi import APIRouter, Depends, status
from typing import Union

from fastapi.responses import JSONResponse
from core import exceptions
from core.security import is_admin
from services.auth import create_user, delete_user
from db.connector import DatabaseConnector
from schemas.Response import (
    ApiResponse,
    ErrorResponse,
    Meta)
from schemas.Request import RegisterRequest
from schemas.User import UserProfile
from sqlalchemy.orm import Session

router = APIRouter(prefix="/users", tags=["Users"])
logger = logging.getLogger("api.v1.users")


@router.post("", response_model=Union[ApiResponse, UserProfile])
async def register_route(
    form_data: RegisterRequest,
    db: Session = Depends(DatabaseConnector.get_db),
    is_admin_user: bool = Depends(is_admin),
):
    logger.info(f"用户注册请求: 用户名: {form_data.username}, 角色: {form_data.role}")
    user = await create_user(
        db=db,
        username=form_data.username,
        email=form_data.email,
        password=form_data.password,
        profile_name=form_data.profile.profile_name,
        avatar_url=form_data.profile.avatar_url,
        role=form_data.role,
    )
    logger.info(f"用户注册成功: 用户名: {user.username}, UUID: {user.uuid}")
    success_resp = ApiResponse(
        status=0,
        message="User registered successfully",
        data={},
        meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
    )
    return JSONResponse(
        status_code=status.HTTP_201_CREATED,
        content=success_resp.model_dump(by_alias=True, exclude_none=True),
    )


@router.delete("/{user_uuid}", response_model=Union[ApiResponse, ErrorResponse])
async def delete_route(
    user_uuid: str,
    db: Session = Depends(DatabaseConnector.get_db),
    is_admin_user: bool = Depends(is_admin),
):
    await delete_user(db, user_uuid)
    success_resp = ApiResponse(
        status=0,
        message="User deleted successfully",
        data={},
        meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
    )
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content=success_resp.model_dump(by_alias=True, exclude_none=True),
    )