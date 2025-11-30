from pydantic import BaseModel
from typing import Optional, Dict


class SummaryRequest(BaseModel):
    session_id: Optional[str] = None
    metadata: Optional[Dict[str, str]] = None


class SummaryResponse(BaseModel):
    summary: str
