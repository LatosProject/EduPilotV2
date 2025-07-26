# services/auth.py
from datetime import datetime, timezone
import logging
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from core import exceptions
from models.user import User
from utils.auth_utils import hash_password, verify_password
from utils.uuid_utils import generate_uuid

logger = logging.getLogger("services.auth")


async def get_user_by_username(db: AsyncSession, username: str) -> User:
    """
    通过用户名查询用户，若存在则返回 User 对象，否则返回 None。
    """
    logger.info("使用 用户名 查询用户: %s", username)
    try:
        stmt = select(User).where(User.username == username)
        result = await db.execute(stmt)
        user = result.scalar_one_or_none()
    except Exception as e:
        logger.error("数据库查询异常: 用户名: %s, 错误: %s", username, e)
        raise exceptions.DatabaseQueryError() from e
    if user is None:
        raise exceptions.UserNotExists(username=username)
    return user


async def get_user_by_uuid(db: AsyncSession, uuid: str) -> User | None:
    """
    根据用户 UUID 查询用户信息

    参数:
        db (AsyncSession): 数据库会话对象
        uuid (str): 用户唯一标识符

    返回:
        User: 查询到的用户实例

    异常:
        UserNotExists: 用户不存在时抛出
        DatabaseQueryError: 查询数据库时发生异常

    备注:
        查询异常时会抛出封装的数据库异常，方便上层处理。
    """
    logger.info("使用 UUID 查询用户 %s", uuid)
    try:
        stmt = select(User).filter(User.uuid == uuid)
        result = await db.execute(stmt)
        user = result.scalar_one_or_none()
    except Exception as e:
        logger.error("数据库查询异常: UUID: %s, 错误: %s", uuid, e)
        raise exceptions.DatabaseQueryError() from e
    if user is None:
        raise exceptions.UserNotExists(uuid=uuid)
    return user


async def get_user_role_by_uuid(db: AsyncSession, uuid: str) -> str | None:
    logger.info("使用 UUID 查询用户角色: UUID: %s", uuid)
    try:
        stmt = select(User).filter(User.uuid == uuid)
        result = await db.execute(stmt)
        user = result.scalar_one_or_none()
        return user.role if user else None
    except Exception as e:
        logger.error("数据库查询用户角色失败: UUID: %s, 错误: %s", uuid, e)
        return None


async def create_user(
    db: AsyncSession,
    username: str,
    email: str,
    password: str,
    profile_name: str,
    avatar_url: str,
    role: str = "user",
) -> User | None:
    logger.info("创建用户: 用户名: %s, 角色: %s", username, role)
    hashed_pw = hash_password(password)
    user = User(
        uuid=generate_uuid(),
        username=username,
        email=email,
        hashed_password=hashed_pw,
        role=role,
        status="active",
        created_at=datetime.now(timezone.utc),
        last_login=datetime.now(timezone.utc),
        profile_name=profile_name if profile_name else "User",  # 默认个人资料名称
        avatar_url=(
            avatar_url
            if avatar_url
            else "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
        ),  # 默认头像URL
    )
    try:
        logger.info("尝试添加用户到数据库: 用户名: %s", username)
        db.add(user)
        await db.commit()
        await db.refresh(user)
        return user
    except Exception as e:
        logger.error("添加用户到数据库失败: 用户名: %s, 错误: %s", username, e)
        return None


async def authenticate_user(
    db: AsyncSession, username: str, password: str
) -> User | None:
    """
    验证用户名和密码是否匹配：
    - 查询用户
    - 验证密码哈希是否正确
    - 成功返回用户对象，失败返回 None
    """
    logger.info(f"尝试登录: 用户名: {username}")
    try:
        user = await get_user_by_username(db, username)
    except exceptions.BaseAppException as e:
        raise e
    except Exception as e:
        logger.error(f"数据库查询异常，登录失败: 用户名: {username} 错误: {e}")
        raise exceptions.DatabaseQueryError() from e
    if not verify_password(password, user.hashed_password):
        raise exceptions.InvalidPasswordException(username)
    return user
