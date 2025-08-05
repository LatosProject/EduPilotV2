# app.py
from contextlib import asynccontextmanager
import os
from fastapi import FastAPI
from api.v1 import users
from api.v1 import auth
from api.v1 import classes
from api.v1 import health
from core.exception_handlers import register_exception_handlers
from core.middleware import AccessLogMiddleware
from api.v1 import users
from db.connector import DatabaseConnector
from fastapi.middleware.cors import CORSMiddleware
from core.logger import setup_logging
import uvicorn

logo = r"""
$$$$$$$$\      $$\           $$$$$$$\  $$\ $$\            $$\     
$$  _____|     $$ |          $$  __$$\ \__|$$ |           $$ |    
$$ |      $$$$$$$ |$$\   $$\ $$ |  $$ |$$\ $$ | $$$$$$\ $$$$$$\   
$$$$$\   $$  __$$ |$$ |  $$ |$$$$$$$  |$$ |$$ |$$  __$$\\_$$  _|  
$$  __|  $$ /  $$ |$$ |  $$ |$$  ____/ $$ |$$ |$$ /  $$ | $$ |    
$$ |     $$ |  $$ |$$ |  $$ |$$ |      $$ |$$ |$$ |  $$ | $$ |$$\ 
$$$$$$$$\\$$$$$$$ |\$$$$$$  |$$ |      $$ |$$ |\$$$$$$  | \$$$$  |
\________|\_______| \______/ \__|      \__|\__| \______/   \____/ 
"""


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    FastAPI 生命周期事件，用于初始化数据库连接等
    """
    setup_logging()
    await DatabaseConnector.initialize()
    yield
    await DatabaseConnector.engine.dispose()  # 清理资源


app = FastAPI(title="EduPilot", version="0.1a", reload=True, lifespan=lifespan)
# 注册路由
app.include_router(auth.router, prefix="/api/v1", tags=["Auth"])
app.include_router(users.router, prefix="/api/v1", tags=["Users"])
app.include_router(classes.router, prefix="/api/v1", tags=["Classes"])
app.include_router(health.router, prefix="", tags=["Health"])
app.add_middleware(AccessLogMiddleware)


register_exception_handlers(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 生产环境建议限制
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Welcome to EduPilot API 👋"}


if __name__ == "__main__":
    print(logo)
    uvicorn.run(
        "app:app",
        host=os.getenv("APP_HOST", "127.0.0.1"),
        port=int(os.getenv("APP_PORT", 8000)),
        reload=bool(os.getenv("APP_RELOAD", "false")),
        server_header=False,
        log_level=os.getenv("LOG_LEVEL", "info").lower(),
        reload_excludes=["**/logs/*", "**/*.log"],
    )
