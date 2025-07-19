from fastapi import FastAPI
from routers import auth
from fastapi.middleware.cors import CORSMiddleware
import uvicorn  

app = FastAPI(
    title="EduPilot",
    version="0.1a"
)
#注册路由
app.include_router(auth.router,prefix="/api/v1",tags=["Auth"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 生产环境建议限制
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello, EduPilot 👋"}

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)