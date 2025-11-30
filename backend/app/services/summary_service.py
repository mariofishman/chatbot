from app.schemas.summary import SummaryRequest
from app.state.session_state import SESSIONS, SessionState


def handle_summary_request(req: SummaryRequest) -> str:
    if req.session_id not in SESSIONS:
        SESSIONS[req.session_id] = SessionState()

    session = SESSIONS[req.session_id]

    session.messages.append(
        {"role": "user", "content": "Please generate a summary of the conversation."}
    )

    assistant_reply = "This is a preliminary summary based on the provided session data. A full LLM-generated summary will be inserted here later."

    session.messages.append({"role": "assistant", "content": assistant_reply})

    return assistant_reply
