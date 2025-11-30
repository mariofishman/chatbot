from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List


class Settings(BaseSettings):
    # --- Core Secrets ---
    openai_api_key: str = Field(..., env="OPENAI_API_KEY")

    # --- Database ---
    database_url: str = Field("sqlite:///./app.db", env="DATABASE_URL")

    # --- CORS ---
    cors_origins: List[str] = Field(
        default_factory=lambda: ["http://localhost:5173"], env="CORS_ORIGINS"
    )

    # --- Model / LLM Settings ---
    llm_model: str = Field("gpt-4o-mini", env="LLM_MODEL")
    llm_temperature: float = Field(0.0, env="LLM_TEMPERATURE")

    # --- Debug Flags ---
    debug: bool = Field(True, env="DEBUG")

    # --- Validation ---
    @field_validator("cors_origins", mode="before")
    def split_cors(cls, v):
        # Allow comma-separated strings or JSON-style lists
        if isinstance(v, str):
            if "," in v:
                return [origin.strip() for origin in v.split(",")]
            return [v]
        return v

    model_config = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", extra="ignore"
    )


settings = Settings()
