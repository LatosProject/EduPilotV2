import logging
import os
from logging.config import dictConfig

LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")

LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,  # 不屏蔽 uvicorn 默认日志
    "formatters": {
        "detailed": {
            "format": (
                "[%(asctime)s] [%(levelname)s] "
                "[%(name)s] [%(funcName)s()] "
                "- %(message)s"
            ),
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
        "error": {
            "format": (
                "[%(asctime)s] [%(levelname)s] "
                "[%(name)s] [%(funcName)s()] "
                "[%(pathname)s:%(lineno)d] - %(message)s"
            ),
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "detailed",
            "level": LOG_LEVEL,
        },
        "file": {
            "class": "logging.handlers.RotatingFileHandler",
            "formatter": "detailed",
            "filename": "logs/app.log",
            "maxBytes": 1024 * 1024 * 5,
            "backupCount": 5,
            "level": LOG_LEVEL,
            "encoding": "utf-8",
        },
        "error_file": {
            "class": "logging.handlers.RotatingFileHandler",
            "formatter": "error",
            "filename": "logs/error.log",
            "maxBytes": 1024 * 1024 * 5,
            "backupCount": 3,
            "level": "ERROR",
            "encoding": "utf-8",
        },
    },
    "root": {
        "handlers": ["console", "file", "error_file"],
        "level": LOG_LEVEL,
    },
}


def setup_logging():
    import colorlog

    os.makedirs("logs", exist_ok=True)
    dictConfig(LOGGING_CONFIG)

    formatter = colorlog.ColoredFormatter(
        fmt="%(log_color)s[%(asctime)s] [%(levelname)s] [%(name)s] - %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
        log_colors={
            "DEBUG": "cyan",
            "INFO": "green",
            "WARNING": "yellow",
            "ERROR": "red",
            "CRITICAL": "bold_red",
        },
    )

    console_handler = logging.getLogger().handlers[0]
    console_handler.setFormatter(formatter)
