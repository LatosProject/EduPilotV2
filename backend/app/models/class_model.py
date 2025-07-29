import uuid
from sqlalchemy import (
    JSON,
    Boolean,
    Column,
    DateTime,
    Integer,
    String,
    Text,
    ForeignKey,
)
from db.connector import Base
from utils import uuid
from sqlalchemy.orm import relationship


class ClassModel(Base):
    __tablename__ = "classes"

    class_uuid = Column(
        String(36),
        primary_key=True,
        default=lambda: str(uuid.generate_uuid()),
        comment="班级 UUID",
    )
    class_name = Column(String(100), nullable=False, unique=True, comment="班级名称")
    description = Column(Text, nullable=True, comment="班级描述")
    teacher_uuid = Column(
        String(36), ForeignKey("users.uuid"), nullable=False, comment="教师 UUID"
    )


class Assignment(Base):
    __tablename__ = "assignments"

    uuid = Column(
        String(36),
        primary_key=True,
        default=lambda: str(uuid.generate_uuid()),
        comment="作业 UUID",
    )

    class_uuid = Column(
        String(36),
        ForeignKey("classes.class_uuid", ondelete="CASCADE"),
        nullable=False,
        index=True,
        comment="班级 UUID",
    )
    uuid = Column(
        String(36),
        primary_key=True,
        default=lambda: str(uuid.uuid4()),  # 或你的 generate_uuid()
        comment="作业 UUID",
    )

    title = Column(String(100), nullable=False, comment="作业标题")
    description = Column(Text, nullable=True, comment="作业描述")
    content = Column(Text, nullable=True, comment="作业正文")
    status = Column(String(50), nullable=False, comment="作业状态")
    deadline = Column(DateTime, nullable=False, comment="截止时间")
    max_score = Column(Integer, nullable=False, default=100, comment="满分")
    allow_late_submission = Column(Boolean, default=False, comment="允许迟交")
    attachments = Column(JSON, nullable=True, comment="附件列表（JSON数组）")

    # 可选：ORM 映射
    class_ = relationship("ClassModel", backref="assignments")
