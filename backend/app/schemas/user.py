from typing import Optional
from pydantic import BaseModel, EmailStr

class UserLogin(BaseModel):
    username:str
    password:str
    
class UserBase(BaseModel):
    email: EmailStr = None
    isSuperUser: bool = False
    fullName: str = None
    lastName: Optional[str] = None

class UserCreate(BaseModel):
    email: EmailStr = None
    isSuperUser: bool = False
    fullName: str = None
    lastName: Optional[str] = None

class UserInDBBase(UserBase):
    id: Optional[int] = None

    class Config:
        orm_mode = True


# Additional properties to return via API
class User(UserInDBBase):
    pass


# Additional properties stored in DB
class UserInDB(UserInDBBase):
    hashed_password: str