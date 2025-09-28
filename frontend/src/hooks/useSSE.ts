import type { Message } from "../types/message";
import { useEffect } from "react";

const USE_MOCK = true;

export function useSSE(setMessages: React.Dispatch<React.SetStateAction<Message[]>>, setActiveMessageId: React.Dispatch<React.SetStateAction<string | null>>, activeMessageId: string | null) {
        useEffect(() => {
            if (!activeMessageId) return;

            if (USE_MOCK) {
                const mockMessages = ["Thi", "s is ", "a te", "st me", "ssage."];
                // const mockMessages = ["[Error: connection lost]"];
                mockMessages.forEach((message, index) => {
                    setTimeout(() => {
                        setMessages(prev =>
                            prev.map(m => m.id === activeMessageId ? { ...m, content: m.content + message } : m)
                        )
                    }, index * 300);
                })
                return;
            }

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
            setMessages(prev =>
                prev.map(m=> m.id=== activeMessageId ? { ...m, content: "[Error: connection lost]"  } : m))
            setActiveMessageId(null);
        }
    
        return () => {
            eventSource.close()
        }
    }, [activeMessageId, setMessages, setActiveMessageId])
}

