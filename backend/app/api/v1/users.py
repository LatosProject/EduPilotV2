import logging
from fastapi import APIRouter, Depends, Query
from typing import Union
from services.classes import get_users
from core.response import to_response
from core.security import is_admin
from services.auth import create_user, delete_user, get_user_by_uuid
from db.connector import DatabaseConnector
from schemas.Response import ApiResponse, ErrorResponse, PageData, Pagination
from schemas.Request import RegisterRequest
from schemas.User import User, UserProfile
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter(prefix="/users", tags=["Users"])
logger = logging.getLogger("api.v1.users")


@router.post("", response_model=Union[ApiResponse, UserProfile])
async def register_route(
    form_data: RegisterRequest,
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    _: None = Depends(is_admin),
):
    """
    注册新用户接口

    仅管理员可用，用于创建新用户账号，并指定角色与初始用户资料。

    - 权限：仅限管理员
    - 请求体：用户名、密码、邮箱、角色、用户资料（昵称、头像URL）
    - 返回：用户信息或错误信息
    - 状态码：201 Created
    """
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
    return to_response(status_code=201, message="User registered successfully")


@router.delete("/{user_uuid}", response_model=Union[ApiResponse, ErrorResponse])
async def delete_route(
    user_uuid: str,
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    _: None = Depends(is_admin),
):
    """
    删除用户接口

    仅管理员可调用，删除指定 UUID 的用户。

    - 权限：仅限管理员
    - 路径参数：用户 UUID
    - 返回：删除成功信息
    """
    await delete_user(db, user_uuid)
    return to_response(message="User deleted successfully")


@router.get("/{user_uuid}", response_model=Union[ApiResponse, ErrorResponse])
async def retrieve_user_route(
    user_uuid: str,
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    _: None = Depends(is_admin),
):
    """
    获取用户信息接口

    仅管理员可访问，返回指定 UUID 的用户详细信息。

    - 权限：仅限管理员
    - 路径参数：用户 UUID
    - 返回：用户详细信息或错误信息
    """
    user = await get_user_by_uuid(db, user_uuid)

    logger.info("成功获取用户信息: 用户名: %s, UUID: %s", user.username, user.uuid)
    return to_response(
        message="User retrieved successfully", data=User.model_validate(user)
    )


@router.get("", response_model=Union[ApiResponse, ErrorResponse])
async def get_users_route(
    status: str,
    search: str,
    role: str,
    page: int = Query(1, ge=1),
    size: int = Query(10, le=10),
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    _: None = Depends(is_admin),
):
    """
    获取用户列表（分页、筛选）
    
    参数:
        status (str): 用户状态筛选（如 active, inactive）
        search (str): 搜索关键字（如用户名、邮箱等）
        role (str): 用户角色（如 student, teacher, admin）
        page (int): 当前页码（从1开始）
        size (int): 每页记录数（最大10）
        db (AsyncSession): 数据库异步会话
        _: 权限校验（管理员）

    返回:
        ApiResponse | ErrorResponse: 标准化响应，包含分页后的用户列表
    """
    items, total = await get_users(
        db=db, page=page, size=size, status=status, search=search, role=role
    )
    pages = (total + size - 1) // size

    return to_response(
        data=PageData(
            items=[User.model_validate(item) for item in items],
            pagination=Pagination(page=page, size=size, total=total, pages=pages),
        )
    )
