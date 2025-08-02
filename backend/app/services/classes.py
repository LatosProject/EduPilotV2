from datetime import datetime, timezone
import logging
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from fastapi import logger
from sqlalchemy.ext.asyncio import AsyncSession
from core import exceptions
from models.class_model import AssignmentModel, ClassMemberModel, ClassModel
from utils import random
from sqlalchemy.orm import selectinload

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
        invite_code=random.generate_invite_code(),
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
    created_by: str,
):
    await get_class_by_uuid(db, class_uuid)
    new_assignment = AssignmentModel(
        uuid=random.generate_uuid(),
        class_uuid=class_uuid,
        title=title,
        description=description,
        content=content,
        status=status,
        deadline=deadline,
        max_score=max_score,
        allow_late_submission=allow_late_submission,
        attachments=attachments,
        submission_count=0,
        updated_at=datetime.now(timezone.utc),
        created_by=created_by,
        created_at=datetime.now(timezone.utc),
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


# TO-DO
async def get_assignment(
    db: AsyncSession, assignment_uuid: str, class_uuid: str, user_uuid: str
):
    await get_class_member_by_uuid(db, class_uuid, user_uuid)

    logger.debug("正在查询作业: uuid: %s, class: %s", assignment_uuid, class_uuid)

    try:
        stmt = select(AssignmentModel).where(
            AssignmentModel.uuid == assignment_uuid,
            AssignmentModel.class_uuid == class_uuid,
        )
        result = await db.execute(stmt)
        assignment = result.scalar_one_or_none()
    except Exception as e:
        logger.error("查询作业失败: %s", e)
        raise exceptions.DatabaseQueryError("查询作业信息失败") from e

    if assignment is None:
        raise exceptions.NotExists()

    return assignment


async def get_class_member_by_uuid(db: AsyncSession, class_uuid: str, user_uuid: str):
    try:
        stmt = select(ClassMemberModel).where(
            ClassMemberModel.user_uuid == user_uuid,
            ClassMemberModel.class_uuid == class_uuid,  # 限定只查本班级的作业
        )
        result = await db.execute(stmt)
        assignment = result.scalar_one_or_none()
    except Exception as e:
        logger.error("查询班级成员失败: %s，错误: %s", user_uuid, e)
        raise exceptions.DatabaseQueryError("查询班级成员失败") from e

    if assignment is None:
        raise exceptions.InvalidParameter()

    return assignment


async def join_class(db: AsyncSession, invite_code: str, user_uuid: str):
    try:
        stmt = select(ClassModel).where(ClassModel.invite_code == invite_code)
        result = await db.execute(stmt)
        class_obj = result.scalar_one_or_none()
        if not class_obj:
            raise exceptions.InvalidParameter("无效的邀请码")

        class_uuid = str(class_obj.class_uuid)
        stmt = select(ClassMemberModel).where(
            ClassMemberModel.class_uuid == class_uuid,
            ClassMemberModel.user_uuid == user_uuid,
        )
        result = await db.execute(stmt)
        existing = result.scalar_one_or_none()
        if existing:
            raise exceptions.AlreadyExists("您已经加入该班级")
        new_member = ClassMemberModel(
            created_at=datetime.now(timezone.utc),
            role="student",
            class_uuid=class_uuid,
            user_uuid=user_uuid,
        )
        db.add(new_member)
        await db.commit()

    except exceptions.AlreadyExists as e:
        logger.warning(f"加入班级失败: {e}")
        raise e  # 直接抛出原始业务异常，不要改成别的异常
    except IntegrityError as e:
        await db.rollback()
        if "UNIQUE constraint failed" in str(e.orig):
            raise exceptions.AlreadyExists("您已经加入该班级")
        logger.error(
            "数据库完整性错误: user=%s, invite_code=%s, 错误=%s",
            user_uuid,
            invite_code,
            e,
        )
        raise exceptions.DatabaseQueryError("数据库操作失败")

    except Exception as e:
        await db.rollback()
        logger.error(
            "加入班级失败: user=%s, invite_code=%s, 错误=%s", user_uuid, invite_code, e
        )
        raise exceptions.DatabaseQueryError("加入班级失败")
    return new_member
