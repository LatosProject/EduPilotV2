# app.py
from fastapi import FastAPI
from routers import users
from core.middleware import AccessLogMiddleware
from routers import auth, users
from fastapi.middleware.cors import CORSMiddleware
from core.logger import setup_logging
from core.exception_handlers import invalid_verify_token_handler
from core.exceptions import InvalidVerifyToken

import uvicorn  

setup_logging()

app = FastAPI(
    title="EduPilot",
    version="0.1a"
)
#注册路由
app.include_router(auth.router,prefix="/api/v1",tags=["Auth"])
app.include_router(users.router,prefix="/api/v1",tags=["Users"])
app.add_middleware(AccessLogMiddleware)
app.add_exception_handler(InvalidVerifyToken, invalid_verify_token_handler)
# app.add_exception_handler(BaseAppException, global_exception_handler)

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
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True, server_header=False, log_level="debug",reload_excludes=["**/logs/*", "**/*.log"])
