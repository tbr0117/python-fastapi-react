from fastapi import APIRouter, Depends
from schemas.user import UserLogin
from fastapi.security import OAuth2PasswordRequestForm
api_router = APIRouter()

@api_router.post("/login")
def login_user(
    form_data: OAuth2PasswordRequestForm = Depends()
):
    return { "username": form_data.username, "password": form_data.password, "state": "success"}
# api_router.add_route("login", )