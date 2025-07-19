# services/auth.py

from datetime import datetime,timezone
from sqlalchemy.orm import Session
from models.user import User
from utils.auth_utils import hash_password, verify_password

def get_user_by_username(db: Session, username: str) -> User | None:
    """
    通过用户名查询用户，若存在则返回 User 对象，否则返回 None。
    """
    return db.query(User).filter(User.username == username).first()

def create_user(db: Session, uuid: int, username: str, email: str, password: str, role: str = "user") -> User:
    hashed_pw = hash_password(password)
    user = User(
        uuid = uuid,
        username=username,
        email=email,
        hashed_password=hashed_pw,
        role=role,
        status="active",
        created_at=datetime.now(timezone.utc),
        last_login=datetime.now(timezone.utc)
    )
    db.add(user)
    db.commit()
    db.refresh(user) 
    return user

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
