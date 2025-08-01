from datetime import datetime, timezone
import logging
from typing import Union
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from core.dependencies import get_current_user
from schemas import User
from services.classes import create_assignment, create_class, get_assignment
from core.security import is_admin, is_teacher
from db.connector import DatabaseConnector
from schemas.Response import (
    ApiResponse,
    AssignmentData,
    AssignmentResponse,
    ErrorResponse,
    Meta,
)
from schemas.Request import CreateAssignmentRequest, CreateClassRequest
from sqlalchemy.orm import Session
from core.response import to_response

router = APIRouter(prefix="/classes", tags=["Classes"])
logger = logging.getLogger("api.v1.classes")


@router.post("", response_model=Union[ApiResponse, ErrorResponse])
async def create_class_route(
    form_data: CreateClassRequest,
    db: Session = Depends(DatabaseConnector.get_db),
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
    return to_response(data=ApiResponse(message="Class created successfully"))


@router.post(
    "/{class_uuid}/homeworks", response_model=Union[ApiResponse, ErrorResponse]
)
async def create_assignment_route(
    form_data: CreateAssignmentRequest,
    class_uuid: str,
    db: Session = Depends(DatabaseConnector.get_db),
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
    return to_response(data=ApiResponse(message="Assignment created successfully"))


# TO-DO
@router.get(
    "/{class_uuid}/homeworks/{assignment_uuid}",
    response_model=Union[AssignmentResponse, ErrorResponse],
)
async def get_assignment_route(
    assignment_uuid: str,
    class_uuid: str,
    db: Session = Depends(DatabaseConnector.get_db),
    current_user: User = Depends(get_current_user),
):
    assignment = await get_assignment(
        db, assignment_uuid, class_uuid, current_user.uuid
    )
    logger.info(
        f"请求结束 - 查询作业成功: class_uuid: {class_uuid}, assignment_uuid: {assignment_uuid}, user_uuid: {current_user.uuid}"
    )
    return to_response(data=AssignmentData.model_validate(assignment))
