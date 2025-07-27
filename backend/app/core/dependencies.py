# core/dependencies.py
import logging
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from core import exceptions
from utils.token import verify_access_token
from models.user import User
from schemas.User import User
from services.auth import get_user_by_uuid
from db.db import DatabaseConnector
from sqlalchemy.orm import Session

logger = logging.getLogger("core.dependencies")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")


async def get_current_user(
    token: str = Depends(oauth2_scheme), db: Session = Depends(DatabaseConnector.get_db)
) -> User | None:
    try:
        logger.info("验证访问令牌")
        token_data = verify_access_token(token)
        if not token_data or not token_data.get("uuid"):
            raise exceptions.InvalidVerifyToken("令牌无效或缺少uuid")
        user = await get_user_by_uuid(db, token_data.get("uuid"))
        logger.info(
            "访问令牌验证成功: uuid: %s 用户名: %s",
            getattr(user, "uuid", None),
            getattr(user, "username", None),
        )
        return user
    except exceptions.InvalidVerifyToken:
        raise
        # return None
    except exceptions.UserNotExists:
        logger.info("用户不存在")
        raise
    except Exception as e:
        logger.error("未知错误: %s", e, exc_info=True)
        raise exceptions.DatabaseQueryError("数据库访问失败") from e
