import logging
from sqlalchemy.exc import IntegrityError
from fastapi import logger
from sqlalchemy.ext.asyncio import AsyncSession
from core import exceptions
from models.class_model import Assignment, ClassModel
from utils import uuid

logger = logging.getLogger("services.classes")


async def create_class(
    db: AsyncSession, class_name: str, description: str, teacher_uuid: str
) -> ClassModel | None:
    new_class = ClassModel(
        class_name=class_name,
        description=description,
        teacher_uuid=teacher_uuid,
    )
    try:
        logger.info("尝试添加新班级到数据库: 班级名: %s", class_name)
        db.add(new_class)
        await db.commit()
        await db.refresh(new_class)
        return new_class
    except IntegrityError as e:
        await db.rollback()
        if "UNIQUE constraint failed" in str(e.orig):
            raise exceptions.AlreadyExists()
    except Exception as e:
        logger.error("添加新班级到数据库失败, 错误: %s", e)
        raise exceptions.InvalidParameter()


async def create_assignment(
    db: AsyncSession,
    class_uuid: str,
    title: str,
    description: str,
    content: str,
    status: str,
    deadline: str,
    max_score: int,
    allow_late_submission: bool,
    attachments: list[str],
):
    new_assignment = Assignment(
        uuid=uuid.generate_uuid(),
        class_uuid=class_uuid,
        title=title,
        description=description,
        content=content,
        status=status,
        deadline=deadline,
        max_score=max_score,
        allow_late_submission=allow_late_submission,
        attachments=attachments,
    )
    try:
        logger.info("尝试添加新作业到数据库: 作业名: %s", title)
        db.add(new_assignment)
        await db.commit()
        await db.refresh(new_assignment)
        return new_assignment
    except IntegrityError as e:
        await db.rollback()
        if "UNIQUE constraint failed" in str(e.orig):
            raise exceptions.AlreadyExists()
    except Exception as e:
        logger.error("添加新作业到数据库失败, 错误: %s", e)
        raise exceptions.InvalidParameter()
    pass
