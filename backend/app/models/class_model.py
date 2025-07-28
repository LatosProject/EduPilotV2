import uuid
from sqlalchemy import Column, String, Text, ForeignKey
from db.connector import Base
from utils import uuid

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
