from fastapi import FastAPI

from api.v1.api import api_router

app = FastAPI(title="My React-FastApi")

app.include_router(api_router)