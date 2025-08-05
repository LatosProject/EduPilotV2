# routers/health.py
from fastapi import APIRouter
from starlette.responses import JSONResponse

router = APIRouter(prefix="/health", tags=["Health"])

@router.get("", summary="健康检查", description="返回服务是否正常运行")
async def health_check():
    return JSONResponse(content={"status": "ok"})