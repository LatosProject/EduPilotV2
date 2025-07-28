# schemas/Response.py
from pydantic import BaseModel, StrictInt, StrictStr, Field
from typing import Optional, Dict, Any
from schemas.User import User, UserProfile


class Meta(BaseModel):
    timestamp: str = Field(..., alias="timestamp", description="响应时间戳")
    model_config = {"populate_by_name": True}


class Error(BaseModel):
    code: StrictInt = Field(..., description="错误代码")
    details: StrictStr = Field(..., description="错误详情")


class ApiResponse(BaseModel):
    status: StrictInt = Field(..., description="状态码，通常 0 表示成功")
    message: StrictStr = Field(..., description="响应消息")
    data: Optional[Dict[str, Any]] = Field(None, description="响应数据，成功时返回")
    meta: Meta = Field(default_factory=lambda: Meta(timestamp=""), description="元数据")


class LoginData(BaseModel):
    expires_in: int
    access_token: str
    user: User


class LoginResponse(ApiResponse):
    data: LoginData


class ErrorResponse(ApiResponse):
    error: Error
