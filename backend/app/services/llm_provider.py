from langchain_openai import ChatOpenAI
from app.config.settings import settings


def get_llm() -> ChatOpenAI:
    return ChatOpenAI(
        model=settings.llm_model,
        temperature=settings.llm_temperature,
        api_key=settings.openai_api_key,
        streaming=True,
    )
