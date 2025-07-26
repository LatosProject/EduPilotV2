import logging
import time
from sqlalchemy import create_engine, event,text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.engine import Engine

DATABASE_URL = "sqlite:///./app.db"
logger = logging.getLogger("db")

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}  # SQLite
)
# 设置 WAL 模式
with engine.connect() as conn:
    conn.execute(text("PRAGMA journal_mode=WAL"))

# SQL 执行前事件
@event.listens_for(Engine, "before_cursor_execute")
def before_cursor_execute(conn, cursor, statement, parameters, context, executemany):
    conn.info.setdefault("query_start_time", []).append(time.time())

# SQL 执行后事件
@event.listens_for(Engine, "after_cursor_execute")
def after_cursor_execute(conn, cursor, statement, parameters, context, executemany):
    start_time = conn.info["query_start_time"].pop(-1)
    total = (time.time() - start_time) * 1000
    logger.info(f"SQL 执行时间: {total:.2f}ms")

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    logger.info("创建数据库会话")
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
