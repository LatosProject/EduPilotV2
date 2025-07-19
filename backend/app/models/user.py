# models/user.py

from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from db import Base


class User(Base):
    __tablename__ = "users" 
    uuid = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False, index=True)
    email = Column(String(100), unique=True, nullable=False, index=True)
    role = Column(String(20), nullable=False, default="user")
    status = Column(String(20), nullable=False, default="active")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    last_login = Column(DateTime(timezone=True), nullable=True)
    hashed_password = Column(String(255), nullable=False) 