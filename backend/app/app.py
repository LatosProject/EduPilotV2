from fastapi import FastAPI
from routers import auth
app = FastAPI()

app = FastAPI(
    title="EduPilot",
    version="0.1a"
)
#注册路由
app.include_router(auth.router,prefix="/api/v1/auth",tags=["Auth"])