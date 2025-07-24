# 引入 FastAPI 的依赖注入相关模块
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer

# 引入 SQLAlchemy 的会话管理器类型
from sqlalchemy.orm import Session

# 引入 Redis 异步客户端类型
from redis.asyncio import Redis

# 从项目中的 db 模块引入获取数据库会话的依赖项
from core.dependencies import get_current_user
from db import get_db


# 从认证服务中引入获取用户角色的方法（从数据库中查）
from services.auth import get_user_role_by_uuid

# 引入 Redis 客户端实例
from core.redis import redis_client
from schemas.User import User


# 定义一个异步函数 is_admin，用于检查当前请求用户是否为管理员
# 它依赖于：token（从请求头提取）、数据库连接、Redis 客户端
async def is_admin(
    user: User = Depends(get_current_user),              # 依赖注入提取 JWT Token
    db: Session = Depends(get_db),   
    redis: Redis = Depends(lambda: redis_client)
) -> None:
    try:
        # 解码 Token，提取 Payload
        uuid = user.uuid

        # 如果 Token 中没有用户名字段，说明是非法 Token
        if not uuid:
            return None

        # 构造 Redis 的缓存键，约定格式为 user_role:用户名
        cache_key = f"auth:role:{uuid}"

        # 查询 Redis 是否已经缓存了该用户的角色
        cached_role = await redis.get(cache_key)

        if not cached_role:
            # 如果缓存未命中，从数据库中查一次角色
            role = get_user_role_by_uuid(db, uuid)

            # 如果数据库中也查不到，认为无效用户
            if not role:
                return None

            # 缓存角色到 Redis，设置 1 小时有效期（单位：秒）
            await redis.set(cache_key, role, ex=3600)
            cached_role = role

        return cached_role == "admin"

    except Exception:
        # 如果解码失败、数据库错误等，默认返回 False（非管理员）
        return None
