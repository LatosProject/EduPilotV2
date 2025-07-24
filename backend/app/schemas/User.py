# schema/User.py
from pydantic import BaseModel, StrictStr,StrictInt,Field

class User(BaseModel):
    uuid: StrictStr= Field(..., description="用户唯一标识符")
    username: StrictStr = Field(..., description="用户名")
    email: StrictStr = Field(..., description="用户邮箱")
    role: StrictStr = Field(..., description="用户角色")
    status: StrictStr = Field(..., description="用户状态")
    created_at: StrictStr = Field(..., alias="created_at", description="创建时间")
    last_login: StrictStr = Field(..., alias="last_login", description="最后登录时间")
    model_config = {
        "populate_by_name": True
    }

class UserProfile(BaseModel):
    profile_name: StrictStr = Field(..., description="用户个人资料名称")
    avatar_url: StrictStr = Field(..., description="用户头像URL")

