import logging
import os
from logging.config import dictConfig

# 获取日志级别（默认 INFO），可通过环境变量 LOG_LEVEL 覆盖
LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")

# 定义日志配置字典
LOGGING_CONFIG = {
    "version": 1,  # 日志配置版本，固定为1
    "disable_existing_loggers": False,  # 不屏蔽已存在的日志器（例如 uvicorn）
    "formatters": {
        # 普通详细格式：输出时间、等级、模块名、函数名、信息
        "detailed": {
            "format": (
                "[%(asctime)s] [%(levelname)s] "
                "[%(name)s] [%(funcName)s()] "
                "- %(message)s"
            ),
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
        # 错误专用格式：带路径和行号，便于追踪错误来源
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
        # 控制台日志输出（彩色）
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "detailed",
            "level": LOG_LEVEL,
        },
        # 普通日志写入文件 logs/app.log，文件最大 5MB，最多保留 5 个历史文件
        "file": {
            "class": "logging.handlers.RotatingFileHandler",
            "formatter": "detailed",
            "filename": "logs/app.log",
            "maxBytes": 1024 * 1024 * 5,  # 5MB
            "backupCount": 5,
            "level": LOG_LEVEL,
            "encoding": "utf-8",
        },
        # 错误日志单独写入 logs/error.log，最大 5MB，最多保留 3 个历史文件
        "error_file": {
            "class": "logging.handlers.RotatingFileHandler",
            "formatter": "error",
            "filename": "logs/error.log",
            "maxBytes": 1024 * 1024 * 5,
            "backupCount": 3,
            "level": "ERROR",  # 只记录 ERROR 级别及以上
            "encoding": "utf-8",
        },
    },
    # 根日志器配置：将日志发送给控制台、普通文件、错误文件三个 handler
    "root": {
        "handlers": ["console", "file", "error_file"],
        "level": LOG_LEVEL,
    },
}


def setup_logging():
    """
    初始化日志系统，包括设置日志目录、加载配置以及为控制台输出添加彩色格式。
    """
    import colorlog  # 引入彩色日志模块

    os.makedirs("logs", exist_ok=True)  # 确保 logs 目录存在
    dictConfig(LOGGING_CONFIG)  # 应用日志配置

    # 使用 colorlog 设置控制台日志彩色输出格式
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

    # 获取根日志器的第一个 handler（默认是 console）
    console_handler = logging.getLogger().handlers[0]
    # 为控制台 handler 设置彩色格式
    console_handler.setFormatter(formatter)
