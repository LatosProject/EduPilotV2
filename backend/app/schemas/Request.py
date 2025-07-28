from pydantic import BaseModel, Field
from schemas.User import User, UserProfile


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
