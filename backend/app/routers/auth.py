# routers/auth.py
from datetime import datetime, timezone
import logging
from fastapi import APIRouter, Cookie, Depends, status
from fastapi.responses import JSONResponse
from core.exception_handlers import invalid_verify_token_handler
from core import exceptions
from core.status_codes import ErrorCode
from core.rate_limit import rate_limiter
from schemas.User import User
from schemas.Response import (
    LoginResponse,
    ErrorResponse,
    Error,
    Meta,
    LoginData,
    LoginRequest,
    ApiResponse,
)
from services.auth import authenticate_user, get_user_by_uuid
from utils.token_utils import create_access_token, verify_access_token
from sqlalchemy.orm import Session
from typing import Union
from db import get_db
from core.dependencies import get_current_user

router = APIRouter(prefix="/auth", tags=["Auth"])

# 获取本模块 logger
logger = logging.getLogger("routers.auth")


@router.post(
    "/login",
    dependencies=[Depends(rate_limiter(limit=10, windows=60))],
    response_model=Union[LoginResponse, ErrorResponse],
)
def login(form_data: LoginRequest, db: Session = Depends(get_db)):
    try:
        logger.info(f"登录请求: 用户名:{form_data.username}")
        user = authenticate_user(db, form_data.username, form_data.password)
        logger.info(f"登录成功: 用户名: {user.username}, UUID: {user.uuid}")
        token, expires_in = create_access_token({"uuid": str(user.uuid)})
        success_resp = LoginResponse(
            status=ErrorCode.SUCCESS,
            message="Login successful",
            data=LoginData(
                access_token=token,
                expires_in=expires_in,
                user=User(
                    uuid=user.uuid,
                    username=user.username,
                    email=user.email,
                    role=user.role,
                    status=user.status,
                    created_at=user.created_at.isoformat(),
                    last_login=user.last_login.isoformat(),
                ),
            ),
            meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
        )
        return JSONResponse(
            status_code=200, content=success_resp.model_dump(by_alias=True)
        )
    except exceptions.BaseAppException as e:
        raise e


@router.get("/profile", response_model=Union[ApiResponse, ErrorResponse])
def profile(current_user: User = Depends(get_current_user)):
    if current_user is None:
        error_resp = ErrorResponse(
            status=ErrorCode.AUTHENTICATION_FAILED,
            message="User not found",
            error=Error(code=401, details="The requested user does not exist"),
            meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
        )
        return JSONResponse(
            status_code=status.HTTP_401_UNAUTHORIZED,
            content=error_resp.model_dump(by_alias=True, exclude_none=True),
        )
    logger.info(
        f"获取用户信息成功: 用户名: {current_user.username}, UUID: {current_user.uuid}"
    )
    success_resp = ApiResponse(
        status=ErrorCode.SUCCESS,
        message="User profile retrieved successfully",
        data=User(
            uuid=current_user.uuid,
            username=current_user.username,
            email=current_user.email,
            role=current_user.role,
            status=current_user.status,
            created_at=current_user.created_at.isoformat(),
            last_login=current_user.last_login.isoformat(),
        ).model_dump(),
        meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
    )
    return JSONResponse(
        status_code=200,
        content=success_resp.model_dump(by_alias=True, exclude_none=True),
    )


@router.post(
    "/refresh",
    dependencies=[Depends(rate_limiter(limit=10, windows=60))],
    response_model=Union[LoginResponse, ErrorResponse],
)
def refresh_token(refresh_token: str = Cookie(...), db: Session = Depends(get_db)):
    try:
        payload = verify_access_token(refresh_token)
        user = get_user_by_uuid(db, payload["uuid"])
        new_token, expires_in = create_access_token({"uuid": str(user.uuid)})
        logger.info(
            f"刷新令牌成功: 用户名: {user.username}, UUID: {user.uuid}, 新令牌: {new_token}"
        )
        success_resp = LoginResponse(
            status=ErrorCode.SUCCESS,
            message="Token refreshed successfully",
            data=LoginData(
                access_token=new_token,
                expires_in=expires_in,
                user=User(
                    uuid=user.uuid,
                    username=user.username,
                    email=user.email,
                    role=user.role,
                    status=user.status,
                    created_at=user.created_at.isoformat(),
                    last_login=user.last_login.isoformat(),
                ),
            ),
            meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
        )
        return JSONResponse(
            status_code=200, content=success_resp.model_dump(by_alias=True)
        )
    except exceptions.BaseAppException as e:
        raise e
    except Exception as e:
        logger.error(f"刷新令牌未知错误: {e}", exc_info=True)
        raise exceptions.BaseAppException(detail=str(e))


@router.get("/verify_token", response_model=Union[ApiResponse, ErrorResponse])
def verify_token(
    current_user: User = Depends(get_current_user), db: Session = Depends(get_db)
):
    if current_user is None:
        error_resp = ErrorResponse(
            status=ErrorCode.AUTHENTICATION_FAILED,
            message="Token verification failed",
            error=Error(code=401, details="Token is invalid or expired"),
            meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
        )
        return JSONResponse(
            status_code=status.HTTP_401_UNAUTHORIZED,
            content=error_resp.model_dump(by_alias=True, exclude_none=True),
        )
    logger.info(
        f"令牌验证成功: 用户名: {current_user.username}, UUID: {current_user.uuid}"
    )
    success_resp = ApiResponse(
        status=ErrorCode.SUCCESS,
        message="Token is valid",
        data={},
        meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
    )
    return JSONResponse(status_code=200, content=success_resp.model_dump(by_alias=True))
