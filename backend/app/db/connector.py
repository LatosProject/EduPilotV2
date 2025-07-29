import logging
import os
import time
from typing import AsyncGenerator
from dotenv import load_dotenv
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import event, text
from sqlalchemy.engine import Engine

logger = logging.getLogger("db.connector")
Base = declarative_base()
load_dotenv()


# SQL 执行前事件
@event.listens_for(Engine, "before_cursor_execute")
def before_cursor_execute(conn, cursor, statement, parameters, context, executemany):
    conn.info.setdefault("query_start_time", []).append(time.time())


# SQL 执行后事件
@event.listens_for(Engine, "after_cursor_execute")
def after_cursor_execute(conn, cursor, statement, parameters, context, executemany):
    start_time = conn.info["query_start_time"].pop(-1)
    total = (time.time() - start_time) * 1000
    logger.debug("SQL 执行时间: %.2fms", total)


class DatabaseConnector:
    """
    数据库连接器类
    用于创建异步数据库引擎和会话工厂，并提供数据库连接和会话管理功能。
    """

    DATABASE_URL = os.getenv("DATABASE_URL")  # 使用 aiosqlite 作为异步 SQLite 驱动

    @classmethod
    async def initialize(cls):
        """初始化数据库引擎和会话工厂"""
        cls.engine = create_async_engine(
            cls.DATABASE_URL, connect_args={"check_same_thread": False}  # SQLite 特性
        )
        cls.async_session = async_sessionmaker(
            autocommit=False, autoflush=False, bind=cls.engine
        )
        # 设置 WAL 模式
        await cls.set_wal_mode()

    @classmethod
    async def set_wal_mode(cls):
        """设置 SQLite 数据库为 WAL 模式
        这可以提高并发性能，特别是在高并发读写场景下。
        """
        async with cls.engine.begin() as conn:
            await conn.execute(text("PRAGMA journal_mode=WAL"))

    @classmethod
    async def get_db(cls) -> AsyncGenerator[AsyncSession, None]:
        """
        数据库会话获取函数
        """
        async with cls.async_session() as session:
            yield session
