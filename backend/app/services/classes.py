import logging
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from fastapi import logger
from sqlalchemy.ext.asyncio import AsyncSession
from core import exceptions
from models.class_model import Assignment, ClassModel
from utils import uuid

logger = logging.getLogger("services.classes")


async def get_class_by_uuid(db: AsyncSession, class_uuid: str) -> ClassModel:
    """
    根据 class_uuid 查询班级信息。

    参数说明:
        db (AsyncSession): 异步数据库会话
        class_uuid (str): 班级唯一标识符

    返回值:
        Class: 查询到的班级对象

    异常说明:
        - NotExists: 班级不存在
        - DatabaseQueryError: 数据库查询失败
    """
    logger.debug("查询班级信息: %s", class_uuid)
    try:
        stmt = select(ClassModel).where(ClassModel.class_uuid == class_uuid)
        result = await db.execute(stmt)
        class_obj = result.scalar_one_or_none()
    except Exception as e:
        logger.error("查询班级失败: %s, 错误: %s", class_uuid, e)
        raise exceptions.DatabaseQueryError("查询班级信息失败") from e

    if class_obj is None:
        raise exceptions.InvalidParameter("班级不存在")

    return class_obj


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
    await get_class_by_uuid(db, class_uuid)
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
