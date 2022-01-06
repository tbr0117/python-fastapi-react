from sqlalchemy.orm import Session

from app.db import base
from app import schemas

def init_db(db:Session) -> None:
    pass