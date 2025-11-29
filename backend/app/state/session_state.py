from typing import List, Dict
from dataclasses import dataclass, field


@dataclass
class SessionState:
    messages: List[Dict] = field(default_factory=list)


SESSIONS: Dict[str, SessionState] = {}
