# schemas/Response.py
from datetime import datetime
from pydantic import BaseModel, ConfigDict, StrictInt, StrictStr, Field
from typing import List, Optional, Dict, Any
from schemas.User import User


class Meta(BaseModel):
    timestamp: str = Field(..., alias="timestamp", description="响应时间戳")
    model_config = {"populate_by_name": True}


class Error(BaseModel):
    code: StrictInt = Field(..., description="错误代码")
    details: StrictStr = Field(None, description="错误详情")


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


class Attachment(BaseModel):
    filename: StrictStr
    url: StrictStr


class AssignmentData(BaseModel):
    uuid: StrictStr = Field(..., description="作业ID")
    title: StrictStr = Field(..., description="作业标题")
    content: Optional[StrictStr] = Field(None, description="作业内容")
    deadline: Optional[datetime] = Field(None, description="截止日期")
    max_score: Optional[StrictInt] = Field(None, description="最高分")
    allow_late_submission: Optional[bool] = Field(False, description="是否允许迟交")
    attachments: Optional[List[Attachment]] = Field(
        default_factory=list, description="附件列表"
    )
    submission_count: Optional[StrictInt] = Field(0, description="提交次数")
    created_by: Optional[StrictStr] = Field(None, description="创建者信息")
    created_at: Optional[datetime] = Field(None, description="创建时间")
    updated_at: Optional[datetime] = Field(None, description="更新时间")
    model_config = {"from_attributes": True}


class AssignmentResponse(ApiResponse):
    data: AssignmentData
