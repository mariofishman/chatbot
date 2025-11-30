from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config.settings import Settings
from app.routers.health import router as health_router

from app.routers.chat import router as chat_router
from app.routers.summary import router as summary_router


settings = Settings()

app = FastAPI(title="Connective API", version="0.1.0")


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(chat_router)
app.include_router(summary_router)
