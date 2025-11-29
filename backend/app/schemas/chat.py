from pydantic import BaseModel
from typing import Optional, Dict


class ChatRequest(BaseModel):
    session_id: str
    message: str
    metadata: Optional[Dict] = None


class ChatStreamChunk(BaseModel):
    type: str
    content: str
    session_id: str


class ChatFinalResponse(BaseModel):
    session_id: str
    full_message: str
    metadata: Optional[Dict] = None
