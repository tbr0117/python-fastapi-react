from fastapi import APIRouter
from schemas.user import UserLogin
api_router = APIRouter()

@api_router.post("/login")
def login_user(
    LoginInfo:UserLogin
):
    return { "username": LoginInfo.username, "password": LoginInfo.password, "state": "success"}
# api_router.add_route("login", )