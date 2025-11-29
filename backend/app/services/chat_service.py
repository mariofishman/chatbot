from app.schemas.chat import ChatRequest
from app.state.session_state import SessionState, SESSIONS
import asyncio


def handle_chat_message(req: ChatRequest) -> str:
    if req.session_id not in SESSIONS:
        SESSIONS[req.session_id] = SessionState()

    session = SESSIONS[req.session_id]

    session.messages.append({"role": "user", "content": req.message})

    assistant_reply = "This is a mock assistant reply"

    session.messages.append({"role": "assistant", "content": assistant_reply})

    return assistant_reply


async def mock_stream_reply(text: str):
    tokens = text.split()
    for token in tokens:
        await asyncio.sleep(0.15)

        yield token
