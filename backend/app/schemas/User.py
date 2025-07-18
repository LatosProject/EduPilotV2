from pydantic import BaseModel, StrictStr,StrictInt,Field

class User(BaseModel):
    uuid: StrictInt= Field(..., description="用户唯一标识符")
    username: StrictStr = Field(..., description="用户名")
    email: StrictStr = Field(..., description="用户邮箱")
    role: StrictStr = Field(..., description="用户角色")
    status: StrictStr = Field(..., description="用户状态")
    created_at: StrictStr = Field(..., alias="data-time", description="创建时间")
    last_login: StrictStr = Field(..., alias="data-time", description="最后登录时间")