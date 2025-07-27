# TO-DO: Implement user registration endpoint

from datetime import datetime, timezone
import logging
from fastapi import APIRouter, Depends, status
from typing import Union

from fastapi.responses import JSONResponse
from core import exceptions
from core.status_codes import ErrorCode
from core.security import is_admin
from services.auth import create_user
from db.db import DatabaseConnector
from schemas.Response import ApiResponse, Error, ErrorResponse, Meta, RegisterRequest
from schemas.User import UserProfile
from sqlalchemy.orm import Session

router = APIRouter(prefix="/users", tags=["Users"])
logger = logging.getLogger("routers.users")


@router.post("", response_model=Union[ApiResponse, UserProfile])
async def register(
    form_data: RegisterRequest,
    db: Session = Depends(DatabaseConnector.get_db),
    is_admin_user: bool = Depends(is_admin),
):
    try:
        # TO-DO :Need to check the redis
        if is_admin_user:
            logger.info(
                f"用户注册请求: 用户名: {form_data.username}, 角色: {form_data.role}"
            )
            user = await create_user(
                db=db,
                username=form_data.username,
                email=form_data.email,
                password=form_data.password,
                profile_name=form_data.profile.profile_name,
                avatar_url=form_data.profile.avatar_url,
                role=form_data.role,
            )
            if user is None:
                logger.warning(
                    f"用户注册失败: 参数无效: {form_data.username}"
                )
                raise exceptions.InvalidParameter()
            logger.info(f"用户注册成功: 用户名: {user.username}, UUID: {user.uuid}")
            success_resp = ApiResponse(
                status=ErrorCode.SUCCESS,
                message="User registered successfully",
                data={},
                meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
            )
            return JSONResponse(
                status_code=status.HTTP_201_CREATED,
                content=success_resp.model_dump(by_alias=True, exclude_none=True),
            )
        else:
            raise exceptions.PermissionDenied()
    except exceptions.BaseAppException as e:
        raise e
        