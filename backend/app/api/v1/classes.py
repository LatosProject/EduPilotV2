from datetime import datetime, timezone
import logging
from typing import Union
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from services.classes import create_assignment, create_class
from core.security import is_admin, is_teacher
from db.connector import DatabaseConnector
from schemas.Response import ApiResponse, ErrorResponse, Meta
from schemas.Request import CreateAssignmentRequest, CreateClassRequest
from sqlalchemy.orm import Session

router = APIRouter(prefix="/classes", tags=["Classes"])
logger = logging.getLogger("api.v1.classes")


@router.post("", response_model=Union[ApiResponse, ErrorResponse])
async def create_class_route(
    form_data: CreateClassRequest,
    db: Session = Depends(DatabaseConnector.get_db),
    _: None = Depends(is_admin),
):
    logger.info(f"创建新班级请求，{form_data.class_name}")
    await create_class(
        db,
        class_name=form_data.class_name,
        description=form_data.description,
        teacher_uuid=form_data.teacher_uuid,
    )
    logger.info(f"创建新班级成功，{form_data.class_name}")
    success_resp = ApiResponse(
        status=0,
        message="Class created successfully",
        data={},
        meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
    )
    return JSONResponse(status_code=200, content=success_resp.model_dump(by_alias=True))


@router.post(
    "/{class_uuid}/homeworks", response_model=Union[ApiResponse, ErrorResponse]
)
async def create_assignment_route(
    form_data: CreateAssignmentRequest,
    class_uuid: str,
    db: Session = Depends(DatabaseConnector.get_db),
    _: None = Depends(is_teacher),
):
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
    )
    logger.info(f"创建新作业成功，{form_data.title}")
    success_resp = ApiResponse(
        status=0,
        message="Assignment created successfully",
        data={},
        meta=Meta(timestamp=datetime.now(timezone.utc).isoformat()),
    )
    return JSONResponse(status_code=200, content=success_resp.model_dump(by_alias=True))
