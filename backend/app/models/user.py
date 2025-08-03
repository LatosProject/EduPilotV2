# models/user.py
from sqlalchemy import Column, String, DateTime
from sqlalchemy.sql import func
from db.connector import Base
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "users"
    uuid = Column(String(36), primary_key=True)
    username = Column(String(50), unique=True, nullable=False, index=True)
    email = Column(String(100), unique=True, nullable=False, index=True)
    role = Column(String(20), nullable=False, default="user")
    status = Column(String(20), nullable=False, default="active")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    last_login = Column(DateTime(timezone=True), nullable=True)
    hashed_password = Column(String(255), nullable=False)

    profile_name = Column(String(100), nullable=True)
    avatar_url = Column(String(255), nullable=False)

    class_members = relationship(
        "ClassMemberModel", back_populates="user", cascade="all, delete-orphan"
    )
