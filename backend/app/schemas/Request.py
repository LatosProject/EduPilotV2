from datetime import datetime
from typing import List
from pydantic import BaseModel, Field
from schemas.User import UserProfile


class LoginRequest(BaseModel):
    username: str
    password: str


class RegisterRequest(BaseModel):
    username: str
    email: str
    password: str
    role: str = Field(..., description="用户角色")
    profile: UserProfile


class CreateClassRequest(BaseModel):
    class_name: str
    description: str
    teacher_uuid: str


class CreateAssignmentRequest(BaseModel):
    title: str
    description: str
    content: str
    status: str
    deadline: datetime
    max_score: int
    allow_late_submission: bool
    attachments: List[str]


class JoinClassRequest(BaseModel):
    invite_code: str
