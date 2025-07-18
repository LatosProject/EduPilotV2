# schemas/user.py
from pydantic import BaseModel, StrictInt, StrictStr, Field
from typing import Dict, Any


class Meta(BaseModel):
    timestamp: str = Field(..., alias="data-time", description="响应时间戳")

class Error(BaseModel):
    code: StrictInt = Field(..., description="错误代码")
    details: StrictStr = Field(..., description="错误详情")
    
class ApiResponse(BaseModel):
    status: StrictInt = Field(description="状态")
    message: StrictStr
    error: Error = Field(..., description="错误信息")
    meta: Meta = Field(default_factory=Meta, description="元数据")
