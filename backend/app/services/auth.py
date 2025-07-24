# services/auth.py
from datetime import datetime,timezone
from sqlalchemy.orm import Session
from models.user import User
from utils.auth_utils import hash_password, verify_password
from utils.uuid_utils import generate_uuid

def get_user_by_username(db: Session, username: str) -> User | None:
    """
    通过用户名查询用户，若存在则返回 User 对象，否则返回 None。
    """
    return db.query(User).filter(User.username == username).first()

def get_user_by_uuid(db: Session, uuid: str) -> User | None:
    """
    通过UUID查询用户，若存在则返回 User 对象，否则返回 None。
    """
    return db.query(User).filter(User.uuid == uuid).first()

def get_user_role_by_uuid(db: Session, uuid: str) -> str | None:
    user = db.query(User).filter(User.uuid == uuid).first()
    return user.role if user else None


def create_user(db: Session,username: str, email: str, password: str, profile_name: str,avatar_url:str, role: str = "user",) -> User:
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
        db.add(user)
        db.commit()
        db.refresh(user) 
        return user
    except Exception as e:
        return None

def authenticate_user(db: Session, username: str, password: str) -> User | None:
    """
    验证用户名和密码是否匹配：
    - 查询用户
    - 验证密码哈希是否正确
    - 成功返回用户对象，失败返回 None
    """
    user = get_user_by_username(db, username)
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user
