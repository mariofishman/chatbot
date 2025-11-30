import logging
from fastapi import APIRouter
from app.schemas.summary import SummaryRequest, SummaryResponse
from app.services.summary_service import handle_summary_request
from fastapi import HTTPException

router = APIRouter()
logger = logging.getLogger("uvicorn.error")


@router.post("/summary", response_model=SummaryResponse)
async def summary_endpoint(req: SummaryRequest):
    if not req.session_id and not req.metadata:
        raise HTTPException(
            status_code=400, detail="Session ID or metadata is required"
        )

    try:
        summary_text = handle_summary_request(req)
        return SummaryResponse(summary=summary_text)
    except Exception as e:
        logger.exception(f"Summary Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
