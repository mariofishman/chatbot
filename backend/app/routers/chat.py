import logging
from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from app.schemas.chat import ChatRequest
from app.services.chat_service import handle_chat_message, mock_stream_reply

router = APIRouter()
logger = logging.getLogger("uvicorn.error")


@router.post("/chat")
async def chat_endpoint(req: ChatRequest):
    assistant_reply = handle_chat_message(req)

    async def token_generator():
        try:
            async for token in mock_stream_reply(assistant_reply):
                yield f"event: text\ndata: {token}\n\n"
        except Exception as e:
            logger.exception(f"Chat Streaming Error: {e}")
            yield f"event:text \ndata: [Error: Internal Failure]\n\n"
        finally:
            yield "event: done\ndata: done\n\n"

    return StreamingResponse(token_generator(), media_type="text/event-stream")
