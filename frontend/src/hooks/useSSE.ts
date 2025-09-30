import type { Message } from "../types/message";
import { useEffect } from "react";

const USE_MOCK = true;

// Mock message options
const mockTextMessage: Message = {
  id: "mock-text",
  role: "assistant",
  content: "This is a test message.",
  widget: {},
  alert: {}
};

const mockConnectionLostMessage: Message = {
  id: "mock-alert",
  role: "assistant", 
  content: "",
  widget: {},
  alert: {
    type: "connectionLost",
    data: {}
  }
};

export function useSSE(setMessages: React.Dispatch<React.SetStateAction<Message[]>>, setActiveMessageId: React.Dispatch<React.SetStateAction<string | null>>, activeMessageId: string | null) {
        useEffect(() => {
            if (!activeMessageId) return;

            if (USE_MOCK) {
                // Choose which mock message to show
                const showConnectionLost = true; // Toggle this to test alerts
                const mockMessage = showConnectionLost ? mockConnectionLostMessage : mockTextMessage;
                
                // Update the message with the chosen mock
                setMessages(prev =>
                    prev.map(m => m.id === activeMessageId ? {
                        ...m,
                        content: mockMessage.content,
                        widget: mockMessage.widget,
                        alert: mockMessage.alert
                    } : m)
                );
                
                // Clear active message after showing
                setTimeout(() => {
                    setActiveMessageId(null);
                }, 1000);
                
                return;
            }

        const eventSource = new EventSource("/chat")
    
        eventSource.onmessage = (event) => {
            const token = event.data;
            setMessages(prev =>
                prev.map(m => m.id === activeMessageId ? { 
                    ...m, 
                    content: m.content + token,
                    widget: {},
                    alert: {}
                } : m)
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
                prev.map(m => m.id === activeMessageId ? { 
                    ...m, 
                    content: "",
                    widget: {},
                    alert: {
                        type: "connectionLost",
                        data: {}
                    }
                } : m))
            setActiveMessageId(null);
        }
    
        return () => {
            eventSource.close()
        }
    }, [activeMessageId, setMessages, setActiveMessageId])
}

