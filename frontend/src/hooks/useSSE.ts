import type { Message } from "../types/message";
import { useEffect } from "react";

export function useSSE(setMessages: React.Dispatch<React.SetStateAction<Message[]>>, setActiveMessageId: React.Dispatch<React.SetStateAction<string | null>>, activeMessageId: string | null) {
        useEffect(() => {
            if (!activeMessageId) return;

        const eventSource = new EventSource("/chat")
    
        eventSource.onmessage = (event) => {
            const token = event.data;
            setMessages(prev =>
                prev.map(m => m.id === activeMessageId ? { ...m, content: m.content + token } : m)
            )
        }
    
        eventSource.addEventListener("done", () => {
            eventSource.close();
            setActiveMessageId(null);
        });
    
        eventSource.onerror = (error) => {
            console.error("SSE Error:", error);
            eventSource.close();
            setActiveMessageId(null);
        }
    
        return () => {
            eventSource.close()
        }
    }, [activeMessageId, setMessages, setActiveMessageId])
}

