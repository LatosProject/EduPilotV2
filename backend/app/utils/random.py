# utils/uuid_utils.py
import random
import string
import uuid


def generate_uuid():
    return str(uuid.uuid4())


def generate_invite_code(length: int = 6) -> str:
    """
    生成一个大写字母和数字组成的随机邀请码，
    长度默认为6位，且至少包含两个数字。

    Returns:
        str: 生成的邀请码
    """
    digits = random.choices(string.digits, k=2)
    letters = random.choices(string.ascii_uppercase, k=length - 2)
    code_list = digits + letters
    random.shuffle(code_list)

    return "".join(code_list)
