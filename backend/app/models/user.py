from typing import TYPE_CHECKING

from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import column_property, relationship

from db.base_class import Base

# from sqlalchemy.ext.declarative import declarative_base

# Base = declarative_base()

# if TYPE_CHECKING:
# from


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    emailId = Column(String, index=True, nullable=False, unique=True)
    firstname = Column(String, index=True, nullable=False)
    lastName = Column(String, index=True)
    isSuperUSer = Column(Boolean, default=False)
