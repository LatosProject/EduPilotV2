# schemas/user.py
from pydantic import BaseModel, StrictInt, StrictStr, Field
from typing import Dict, Any


class Meta(BaseModel):
    timestamp: str = Field(..., alias="data-time", description="响应时间戳")

class ApiResponse(BaseModel):
    status: StrictInt = Field(description="状态")
    message: StrictStr = Field(..., description="响应消息")
    data: Dict[str, Any] = Field(..., description="响应数据")
    meta : Meta = Field(default_factory=Meta, description="元数据")

