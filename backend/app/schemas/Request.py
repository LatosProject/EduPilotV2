from datetime import datetime
from typing import List
from pydantic import BaseModel, Field, HttpUrl
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


class Attachment(BaseModel):
    filename: str
    url: HttpUrl


class CreateAssignmentRequest(BaseModel):
    title: str
    description: str
    content: str
    status: str
    deadline: datetime
    max_score: int
    allow_late_submission: bool
    attachments: List[Attachment]


class JoinClassRequest(BaseModel):
    invite_code: str


class UpdateClassRequest(BaseModel):
    class_name: str
    description: str


class UpdateUserRequest(BaseModel):
    username: str
    email: str
    role: str
    status: str
    profile_name: str
    avatar_url: str
