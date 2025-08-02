# schema/User.py
from datetime import datetime
from pydantic import BaseModel, StrictStr, StrictInt, Field
from sqlalchemy.orm import relationship


class User(BaseModel):
    uuid: StrictStr = Field(..., description="用户唯一标识符")
    username: StrictStr = Field(..., description="用户名")
    email: StrictStr = Field(..., description="用户邮箱")
    role: StrictStr = Field(..., description="用户角色")
    status: StrictStr = Field(..., description="用户状态")
    created_at: datetime = Field(..., alias="created_at", description="创建时间")
    last_login: datetime = Field(..., alias="last_login", description="最后登录时间")
    model_config = {"populate_by_name": True, "from_attributes": True}


class UserProfile(BaseModel):
    profile_name: StrictStr = Field(..., description="用户个人资料名称")
    avatar_url: StrictStr = Field(..., description="用户头像URL")
