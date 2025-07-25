# services/auth.py
from datetime import datetime,timezone
import logging
<<<<<<< HEAD
from sqlalchemy.orm import Session
=======
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
>>>>>>> 5023c6d21132481385915b508e031ac87d497f19
from models.user import User
from utils.auth_utils import hash_password, verify_password
from utils.uuid_utils import generate_uuid

logger = logging.getLogger("services.auth")

<<<<<<< HEAD
def get_user_by_username(db: Session, username: str) -> User | None:
=======
async def get_user_by_username(db: AsyncSession, username: str) -> User | None:
>>>>>>> 5023c6d21132481385915b508e031ac87d497f19
    """
    通过用户名查询用户，若存在则返回 User 对象，否则返回 None。
    """
    logger.info(f"使用 用户名 查询用户: {username}")
    try:
<<<<<<< HEAD
        return db.query(User).filter(User.username == username).first()
=======
        result = await db.execute(select(User).where(User.username == username))
        return result.scalar_one_or_none()
>>>>>>> 5023c6d21132481385915b508e031ac87d497f19
    except Exception as e:
        logger.error(f"数据库查询异常: 用户名: {username}, 错误: {e}")
        return None

<<<<<<< HEAD
def get_user_by_uuid(db: Session, uuid: str) -> User | None:
=======
async def get_user_by_uuid(db: AsyncSession, uuid: str) -> User | None:
>>>>>>> 5023c6d21132481385915b508e031ac87d497f19
    """
    通过UUID查询用户，若存在则返回 User 对象，否则返回 None。
    """
    logger.info(f"使用 UUID 查询用户 {uuid}")
    try:
<<<<<<< HEAD
        return db.query(User).filter(User.uuid == uuid).first()
=======
        result = await db.execute(select(User).where(User.uuid == uuid))
        return result.scalar_one_or_none()
>>>>>>> 5023c6d21132481385915b508e031ac87d497f19
    except Exception as e:
        logger.error(f"数据库查询异常: UUID: {uuid}, 错误: {e}")
        return None

<<<<<<< HEAD
def get_user_role_by_uuid(db: Session, uuid: str) -> str | None:
    logger.info(f"使用 UUID 查询用户角色: UUID: {uuid}")
    user = db.query(User).filter(User.uuid == uuid).first()
    try:
        return user.role if user else None
=======
async def get_user_role_by_uuid(db: AsyncSession, uuid: str) -> str | None:
    logger.info(f"使用 UUID 查询用户角色: UUID: {uuid}")
    try:
        result = await db.execute(select(User).where(User.uuid == uuid))
        user = result.scalar_one_or_none()
        return getattr(user, "role", None) if user else None
>>>>>>> 5023c6d21132481385915b508e031ac87d497f19
    except Exception as e:
        logger.error(f"数据库查询用户角色失败: UUID: {uuid}, 错误: {e}")
        return None

<<<<<<< HEAD
def create_user(db: Session,username: str, email: str, password: str, profile_name: str,avatar_url:str, role: str = "user",) -> User:
=======
async def create_user(db: AsyncSession,username: str, email: str, password: str, profile_name: str,avatar_url:str, role: str = "user",) -> User | None:
>>>>>>> 5023c6d21132481385915b508e031ac87d497f19
    logger.info(f"创建用户: 用户名: {username}, 角色: {role}")
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
        profile_name=profile_name if profile_name else "User",# 默认个人资料名称
        avatar_url=avatar_url if avatar_url else "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"  # 默认头像URL
    )
    try:
        logger.info(f"尝试添加用户到数据库: 用户名: {username}")
        db.add(user)
<<<<<<< HEAD
        db.commit()
        db.refresh(user) 
        return user
    except Exception as e:
        logger.error(f"添加用户到数据库失败: 用户名: {username}, 错误: {e}")
        return None

def authenticate_user(db: Session, username: str, password: str) -> User | None:
=======
        await db.commit()
        await db.refresh(user)
        return user
    except Exception as e:
        await db.rollback()
        logger.error(f"添加用户到数据库失败: 用户名: {username}, 错误: {e}")
        return None

async def authenticate_user(db: AsyncSession, username: str, password: str) -> User | None:
>>>>>>> 5023c6d21132481385915b508e031ac87d497f19
    """
    验证用户名和密码是否匹配：
    - 查询用户
    - 验证密码哈希是否正确
    - 成功返回用户对象，失败返回 None
    """
    logger.info(f"尝试登录: 用户名: {username}")
    try:
<<<<<<< HEAD
        user = get_user_by_username(db, username)
=======
        user = await get_user_by_username(db, username)
>>>>>>> 5023c6d21132481385915b508e031ac87d497f19
    except Exception as e:
        logger.error(f"数据库查询异常，登录失败: 用户名: {username} 错误: {e}")
        return None
    if not user:
        return None
<<<<<<< HEAD
    if not verify_password(password, user.hashed_password):
=======
    if not verify_password(password, getattr(user, "hashed_password", "")):
>>>>>>> 5023c6d21132481385915b508e031ac87d497f19
        return None
    return user
