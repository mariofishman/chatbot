from typing import Iterable


def sse_format_text(data: str) -> str:
    return f"event: text\ndata: {data}\n\n"


def stream_tokens(tokens: Iterable[str]):
    for token in tokens:
        yield sse_format_text(token)

    yield "event: done\ndata: done\n\n"
