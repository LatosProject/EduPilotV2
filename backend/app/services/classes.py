import logging
from sqlalchemy.exc import IntegrityError
from fastapi import logger
from sqlalchemy.ext.asyncio import AsyncSession
from core import exceptions
from models.class_model import ClassModel
from utils import uuid

logger = logging.getLogger("services.classes")


async def create_class(
    db: AsyncSession, class_name: str, description: str, teacher_uuid: str
) -> ClassModel | None:
    new_class = ClassModel(
        class_uuid=uuid.generate_uuid(),
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
