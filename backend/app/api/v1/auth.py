# routers/auth.py
from datetime import datetime, timezone
import logging
from fastapi import APIRouter, Cookie, Depends
from fastapi.responses import JSONResponse
from core.rate_limit import rate_limiter
from schemas.User import User
from schemas.Response import (
    LoginResponse,
    ErrorResponse,
    Meta,
    LoginData,
    ApiResponse,
)
from schemas.Request import LoginRequest
from services.auth import authenticate_user, get_user_by_uuid
from utils.token import (
    create_access_token,
    create_fresh_token,
    verify_fresh_token,
)
from sqlalchemy.ext.asyncio import AsyncSession
from typing import Union
from db.connector import DatabaseConnector
from core.dependencies import get_current_user

router = APIRouter(prefix="/auth", tags=["Auth"])

logger = logging.getLogger("api.v1.auth")


@router.post(
    "/login",
    dependencies=[Depends(rate_limiter(limit=10, windows=60))],
    response_model=Union[LoginResponse, ErrorResponse],
)
async def login_route(
    form_data: LoginRequest, db: AsyncSession = Depends(DatabaseConnector.get_db)
):

    logger.info("登录请求: 用户名:%s", form_data.username)
    user = await authenticate_user(db, form_data.username, form_data.password)
    logger.info("登录成功: 用户名: %s, UUID: %s", user.username, user.uuid)
    token, expires_in = create_access_token({"uuid": str(user.uuid)})
    fresh_token, fresh_expires_in = create_fresh_token({"uuid": str(user.uuid)})

    success_resp = LoginResponse(
        status=0,
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
    response = JSONResponse(
        status_code=200, content=success_resp.model_dump(by_alias=True)
    )
    response.set_cookie(
        key="fresh_token",
        value=fresh_token,
        max_age=fresh_expires_in,
        httponly=True,
        secure=True,
        samesite="Lax",
        path="/",
    )

    return response


@router.get("/profile", response_model=Union[ApiResponse, ErrorResponse])
async def profile_route(current_user: User = Depends(get_current_user)):
    logger.info(
        "获取用户信息成功: 用户名: %s, UUID: %s",
        current_user.username,
        current_user.uuid,
    )
    success_resp = ApiResponse(
        status=0,
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
async def refresh_token_route(
    refresh_token: str = Cookie(...),
    db: AsyncSession = Depends(DatabaseConnector.get_db),
):

    payload = verify_fresh_token(refresh_token)
    user = await get_user_by_uuid(db, payload["uuid"])
    new_token, expires_in = create_access_token({"uuid": str(user.uuid)})
    logger.info(
        "刷新令牌成功: 用户名: %s, UUID: %s, 新令牌: %s",
        user.username,
        user.uuid,
        new_token,
    )
    success_resp = LoginResponse(
        status=0,
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
    return JSONResponse(status_code=200, content=success_resp.model_dump(by_alias=True))


@router.get("/verify_token", response_model=Union[ApiResponse, ErrorResponse])
async def verify_token_route(current_user: User = Depends(get_current_user)):
    logger.info(
        "令牌验证成功: 用户名: %s, UUID: %s", current_user.username, current_user.uuid
    )
    success_resp = ApiResponse(
        status=0,
        message="Token is valid",
        data={},
        meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
    )
    return JSONResponse(status_code=200, content=success_resp.model_dump(by_alias=True))
