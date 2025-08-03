import logging
from typing import Union
from fastapi import APIRouter, Depends, Query
from core.dependencies import get_current_user
from schemas import User
from services.classes import (
    create_assignment,
    create_class,
    delete_class,
    get_assignment,
    get_assignments,
    join_class,
)
from core.security import is_admin, is_teacher, is_teacher_or_admin
from db.connector import DatabaseConnector
from schemas.Response import (
    ApiResponse,
    AssignmentData,
    AssignmentResponse,
    ErrorResponse,
    PageData,
    Pagination,
)
from schemas.Request import (
    CreateAssignmentRequest,
    CreateClassRequest,
    JoinClassRequest,
)
from sqlalchemy.orm import Session
from sqlalchemy.ext.asyncio import AsyncSession
from core.response import to_response

router = APIRouter(prefix="/classes", tags=["Classes"])
logger = logging.getLogger("api.v1.classes")


@router.post("", response_model=Union[ApiResponse, ErrorResponse])
async def create_class_route(
    form_data: CreateClassRequest,
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    _: None = Depends(is_admin),
):
    """
    创建新班级接口

    仅管理员可访问，用于创建新的班级并指定负责教师。

    - 权限：仅限管理员（is_admin）
    - 参数：班级名、描述、教师UUID
    - 返回：创建成功消息
    """
    logger.info(f"创建新班级请求，{form_data.class_name}")
    await create_class(
        db,
        class_name=form_data.class_name,
        description=form_data.description,
        teacher_uuid=form_data.teacher_uuid,
    )
    logger.info(f"创建新班级成功，{form_data.class_name}")
    return to_response(message="Class created successfully")


@router.delete("/{class_uuid}", response_model=Union[ApiResponse, ErrorResponse])
async def delete_class_route(
    class_uuid: str,
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    _: None = Depends(is_teacher_or_admin),
    current_user: User = Depends(get_current_user),
):
    """
    删除指定班级接口

    参数:
    - class_uuid (str): 路径参数，目标班级的 UUID，用于标识要删除的班级。
    - db (AsyncSession): 依赖注入，异步数据库会话，用于执行删除操作。
    - _ (None): 依赖注入，用于权限验证，确保当前用户是教师或管理员。
    - current_user (User): 依赖注入，当前经过身份验证的用户对象。

    权限:
    - 只有拥有教师或管理员权限的用户可以执行删除操作。

    功能:
    - 调用 `delete_class` 函数，传入数据库会话、班级 UUID、当前用户 UUID 和角色，执行班级删除逻辑。
    - 删除班级时，应级联删除该班级相关的作业、班级成员等关联数据（具体由数据库约束和业务逻辑决定）。

    返回:
    - 成功时返回标准成功响应，message 字段提示“Class created successfully”。
    - 失败时返回错误响应。

    注意:
    - 这里返回信息中的“Class created successfully”应修改为删除成功提示，避免语义混淆。
    """
    await delete_class(db, class_uuid, current_user.uuid, current_user.role)
    return to_response(message="Class deleted successfully")


@router.get("/{class_uuid}/homeworks", response_model=Union[ApiResponse, ErrorResponse])
async def get_assignments_route(
    class_uuid: str,
    status: str,
    search: str,
    order_by: str,
    order: str,
    page: int = Query(1, ge=1),
    size: int = Query(10, le=10),
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    current_user: User = Depends(get_current_user),
):
    """
    获取指定班级的作业列表（支持分页、搜索、筛选和排序）

    参数:
    - class_uuid (str): 路径参数，目标班级的 UUID。
    - status (str): 查询参数，过滤作业的状态（如“已发布”、“草稿”等）。
    - search (str): 查询参数，关键词搜索，用于匹配作业标题或描述。
    - order_by (str): 查询参数，指定排序字段（例如“deadline”、“created_at”等）。
    - order (str): 查询参数，排序顺序，“asc” 或 “desc”。
    - page (int): 查询参数，分页页码，默认1，最小值为1。
    - size (int): 查询参数，每页条数，默认10，最大值为10。
    - db (AsyncSession): 依赖注入，异步数据库会话，用于执行数据库操作。
    - current_user (User): 依赖注入，当前经过身份验证的用户对象。

    返回:
    - ApiResponse: 包含分页后的作业数据列表和分页信息。
    - ErrorResponse: 出错时返回的错误信息结构。

    逻辑流程:
    1. 调用 `get_assignments` 函数，从数据库异步获取符合条件的作业列表及总数。
    2. 根据总数和每页大小计算总页数。
    3. 使用 Pydantic 的 `model_validate` 方法将数据库模型对象转换为响应模型。
    4. 将作业列表和分页信息封装成统一响应结构，返回给客户端。
    """
    items, total = await get_assignments(
        db=db,
        user_uuid=current_user.uuid,
        class_uuid=class_uuid,
        page=page,
        size=size,
        status=status,
        search=search,
        order_by=order_by,
        order=order,
    )

    pages = (total + size - 1) // size

    return to_response(
        data=PageData(
            items=[AssignmentData.model_validate(item) for item in items],
            pagination=Pagination(page=page, size=size, total=total, pages=pages),
        )
    )


@router.post(
    "/{class_uuid}/homeworks", response_model=Union[ApiResponse, ErrorResponse]
)
async def create_assignment_route(
    form_data: CreateAssignmentRequest,
    class_uuid: str,
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    current_user: User = Depends(get_current_user),
    _: None = Depends(is_teacher),
):
    """
    创建作业接口

    教师用户在指定班级下创建新的作业。

    - 权限：教师（is_teacher）
    - 参数：作业标题、描述、内容、截止时间、是否允许迟交、最大分数、附件
    - 返回：创建成功消息
    """
    logger.info(f"创建新作业请求，{form_data.title}")
    await create_assignment(
        db,
        class_uuid=class_uuid,
        title=form_data.title,
        description=form_data.description,
        content=form_data.content,
        status=form_data.status,
        deadline=form_data.deadline,
        max_score=form_data.max_score,
        allow_late_submission=form_data.allow_late_submission,
        attachments=form_data.attachments,
        created_by=current_user.username,
    )
    logger.info(f"创建新作业成功，{form_data.title}")
    return to_response(message="Assignment created successfully")


@router.get(
    "/{class_uuid}/homeworks/{assignment_uuid}",
    response_model=Union[AssignmentResponse, ErrorResponse],
)
async def get_assignment_route(
    assignment_uuid: str,
    class_uuid: str,
    db: AsyncSession = Depends(DatabaseConnector.get_db),
    current_user: User = Depends(get_current_user),
):
    """
    查询作业详情接口

    当前用户在指定班级中查询指定作业的详细信息。

    - 权限：班级成员（已通过 get_class_member_by_uuid 验证）
    - 参数：
        - class_uuid：班级唯一标识符
        - assignment_uuid：作业唯一标识符
    - 返回：作业详情（包含标题、内容、截止时间、附件等信息）
    """

    assignment = await get_assignment(
        db, assignment_uuid, class_uuid, current_user.uuid
    )
    logger.info(
        f"请求结束 - 查询作业成功: class_uuid: {class_uuid}, assignment_uuid: {assignment_uuid}, user_uuid: {current_user.uuid}"
    )
    return to_response(data=AssignmentData.model_validate(assignment))


@router.post("/students", response_model=Union[ApiResponse, ErrorResponse])
async def join_class_route(
    form_data: JoinClassRequest,
    db: AsyncSession = Depends(
        DatabaseConnector.get_db,
    ),
    current_user: User = Depends(get_current_user),
):
    """
    学生加入班级接口

    当前登录用户通过邀请码加入指定班级。

    - 权限要求：当前用户必须为学生（逻辑上校验）
    - 参数：
        - invite_code：班级的邀请码
    - 返回：
        - 当前用户在该班级中的角色信息及加入时间
    """
    joined_class = await join_class(db, form_data.invite_code, current_user)

    logger.info(
        "请求结束 - 加入班级成功: class_uuid=%s, user_uuid=%s",
        joined_class.class_uuid,
        joined_class.profile_name,
    )

    return to_response(data=joined_class)
