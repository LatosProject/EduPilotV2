# services/auth.py
from datetime import datetime, timezone
import logging
from sqlalchemy.orm import Session
from core import exceptions
from models.user import User
from utils.auth_utils import hash_password, verify_password
from utils.uuid_utils import generate_uuid

logger = logging.getLogger("services.auth")


def get_user_by_username(db: Session, username: str) -> User:
    """
    通过用户名查询用户，若存在则返回 User 对象，否则返回 None。
    """
    logger.info(f"使用 用户名 查询用户: {username}")
    try:
        user = db.query(User).filter(User.username == username).first()
    except Exception as e:
        logger.error(f"数据库查询异常: 用户名: {username}, 错误: {e}")
        raise exceptions.DatabaseQueryError() from e
    if user is None:
        raise exceptions.UserNotExists(username)
    return user


def get_user_by_uuid(db: Session, uuid: str) -> User | None:
    """
    根据用户 UUID 查询用户信息

    参数:
        db (Session): 数据库会话对象
        uuid (str): 用户唯一标识符

    返回:
        User: 查询到的用户实例

    异常:
        UserNotExists: 用户不存在时抛出
        DatabaseQueryError: 查询数据库时发生异常

    备注:
        查询异常时会抛出封装的数据库异常，方便上层处理。
    """
    logger.info(f"使用 UUID 查询用户 {uuid}")
    try:
        user = db.query(User).filter(User.uuid == uuid).first()
    except Exception as e:
        logger.error(f"数据库查询异常: UUID: {uuid}, 错误: {e}")
        raise exceptions.DatabaseQueryError() from e
    if user is None:
        raise exceptions.UserNotExists(uuid)
    return user


def get_user_role_by_uuid(db: Session, uuid: str) -> str | None:
    logger.info(f"使用 UUID 查询用户角色: UUID: {uuid}")
    user = db.query(User).filter(User.uuid == uuid).first()
    try:
        return user.role if user else None
    except Exception as e:
        logger.error(f"数据库查询用户角色失败: UUID: {uuid}, 错误: {e}")
        return None


def create_user(
    db: Session,
    username: str,
    email: str,
    password: str,
    profile_name: str,
    avatar_url: str,
    role: str = "user",
) -> User:
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
        profile_name=profile_name if profile_name else "User",  # 默认个人资料名称
        avatar_url=(
            avatar_url
            if avatar_url
            else "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
        ),  # 默认头像URL
    )
    try:
        logger.info(f"尝试添加用户到数据库: 用户名: {username}")
        db.add(user)
        db.commit()
        db.refresh(user)
        return user
    except Exception as e:
        logger.error(f"添加用户到数据库失败: 用户名: {username}, 错误: {e}")
        return None


def authenticate_user(db: Session, username: str, password: str) -> User | None:
    """
    验证用户名和密码是否匹配：
    - 查询用户
    - 验证密码哈希是否正确
    - 成功返回用户对象，失败返回 None
    """
    logger.info(f"尝试登录: 用户名: {username}")
    try:
        user = get_user_by_username(db, username)
    except exceptions.BaseAppException as e:
        raise e
    except Exception as e:
        logger.error(f"数据库查询异常，登录失败: 用户名: {username} 错误: {e}")
        raise exceptions.DatabaseQueryError() from e
    if not verify_password(password, user.hashed_password):
        raise exceptions.InvalidPasswordException(username)
    return user
