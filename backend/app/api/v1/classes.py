from datetime import datetime, timezone
import logging
from typing import Union
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse

from core import exceptions
from services.classes import create_class
from core.security import is_admin
from db.connector import DatabaseConnector
from schemas.Response import ApiResponse, ErrorResponse, Meta
from schemas.Request import CreateClassRequest
from sqlalchemy.orm import Session

router = APIRouter(prefix="/classes", tags=["Classes"])
logger = logging.getLogger("api.v1.classes")


@router.post("", response_model=ApiResponse)
async def create_assignment(
    form_data: CreateClassRequest,
    db: Session = Depends(DatabaseConnector.get_db),
    is_admin_user: bool = Depends(is_admin),
):
    if is_admin_user:
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
        return JSONResponse(
            status_code=200, content=success_resp.model_dump(by_alias=True)
        )
    else:
        raise exceptions.PermissionDenied()
