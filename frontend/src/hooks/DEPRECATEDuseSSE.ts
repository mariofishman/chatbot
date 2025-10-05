import type { Message, SSEMessage } from "../types/message";
import { useEffect } from "react";

const USE_MOCK = true;

// Mock SSE messages following new architecture
const mockTextSSE: SSEMessage = {
  type: "text",
  payload: {
    token: "This is a test message."
  },
  meta: {
    requestId: "mock-text-123",
    stream: true
  }
};

const mockObjectSSE: SSEMessage = {
  type: "object",
  payload: {
    objectType: "contact",
    size: "small",
    data: {
      name: "Martha",
      status: "draft",
      roleAndCompany: "Buyer · Fishmart",
      profileImageUrl: "/src/assets/facePics/1516818428248.jpeg",
      goalLinked: false
    }
  },
  meta: {
    requestId: "mock-object-123",
    stream: false
  }
};

const mockObjectSSE2: SSEMessage = {
  type: "object",
  payload: {
    objectType: "contact",
    size: "medium",
    data: {
      name: "Martha",
      status: "draft",
      roleAndCompany: "Buyer · Fishmart",
      profileImageUrl: "/src/assets/facePics/1516818428248.jpeg",
      goalLinked: true,
      tags: ["Professional", "Follow-up"],
      lastInteraction: "2 days ago",
      suggestedActions: ["Set Reminder", "Add Note", "Update Status"]
    }
  },
  meta: {
    requestId: "mock-object-123",
    stream: false
  }
};

const mockAlertSSE: SSEMessage = {
  type: "alert",
  payload: {
    alertType: "connectionLost",
    message: "Connection lost"
  },
  meta: {
    requestId: "mock-alert-123",
    stream: false
  }
};


export function useSSE(setMessages: React.Dispatch<React.SetStateAction<Message[]>>, setActiveMessageId: React.Dispatch<React.SetStateAction<string | null>>, activeMessageId: string | null) {
        useEffect(() => {
            if (!activeMessageId) return;

            if (USE_MOCK) {
                const messageSequence = [0,0,1,2,3,1,0,0]; // Example sequence: text, object, text, object2, alert, object
                const mockSSE = [mockTextSSE, mockObjectSSE, mockObjectSSE2, mockAlertSSE];
                
                let currentIndex = 0;
                
                const interval = setInterval(() => {
                    if (currentIndex < messageSequence.length) {
                        const messageIndex = messageSequence[currentIndex];
                        processSSEMessage(mockSSE[messageIndex], setMessages, activeMessageId);
                        currentIndex++;
                    } else {
                        // All messages sent - trigger "done" event
                        clearInterval(interval);
                        setActiveMessageId(null); // Close SSE
                    }
                }, 500); // Send every 500ms
                
                return () => clearInterval(interval); // Cleanup
            }

        const eventSource = new EventSource("/chat")
    
        // Handle text events
        eventSource.addEventListener("text", (event) => {
            try {
                const sseMessage: SSEMessage = JSON.parse(event.data);
                processSSEMessage(sseMessage, setMessages, activeMessageId);
            } catch (error) {
                console.error("Error parsing text SSE:", error);
            }
        });
        
        // Handle object events
        eventSource.addEventListener("object", (event) => {
            try {
                const sseMessage: SSEMessage = JSON.parse(event.data);
                processSSEMessage(sseMessage, setMessages, activeMessageId);
            } catch (error) {
                console.error("Error parsing object SSE:", error);
            }
        });
        
        // Handle alert events
        eventSource.addEventListener("alert", (event) => {
            try {
                const sseMessage: SSEMessage = JSON.parse(event.data);
                processSSEMessage(sseMessage, setMessages, activeMessageId);
            } catch (error) {
                console.error("Error parsing alert SSE:", error);
            }
        });
    
        eventSource.addEventListener("done", () => {
            eventSource.close();
            setActiveMessageId(null);
        });
    
        eventSource.onerror = (error) => {
            console.error("SSE Error:", error);
            eventSource.close();
            // Create connection lost alert
            const connectionLostSSE: SSEMessage = {
                type: "alert",
                payload: {
                    alertType: "connectionLost",
                    message: "Connection lost"
                },
                meta: {
                    requestId: "error-" + Date.now(),
                    stream: false
                }
            };
            processSSEMessage(connectionLostSSE, setMessages, activeMessageId);
            setActiveMessageId(null);
        }
    
        return () => {
            eventSource.close()
        }
    }, [activeMessageId, setMessages, setActiveMessageId])
}

// Helper function to process SSE messages and update the frontend Message
function processSSEMessage(sseMessage: SSEMessage, setMessages: React.Dispatch<React.SetStateAction<Message[]>>, activeMessageId: string) {
    setMessages(prev =>
        prev.map(m => m.id === activeMessageId ? {
            ...m,
            ...(sseMessage.type === "text" && {
                content: m.content + (sseMessage.payload.token || ""),
                widgets: m.widgets, // Preserve existing widgets
                alert: m.alert, // Preserve existing alerts
                lastMessageType: "text" // Track last message type
            }),
            ...(sseMessage.type === "object" && {
                content: m.content, // Preserve existing content
                widgets: (() => {
                    const existingWidgets = m.widgets || [];
                    const lastWidget = existingWidgets[existingWidgets.length - 1];
                    
                    // Only concatenate if last message was also object AND same widget type
                    if (m.lastMessageType === "object" && 
                        lastWidget && 
                        lastWidget.objectType === sseMessage.payload.objectType && 
                        lastWidget.size === sseMessage.payload.size) {
                        return [
                            ...existingWidgets.slice(0, -1),
                            {
                                ...lastWidget,
                                data: [...lastWidget.data, sseMessage.payload.data]
                            }
                        ];
                    } else {
                        // Different type or non-consecutive, add new widget block
                        return [
                            ...existingWidgets,
                            {
                                objectType: sseMessage.payload.objectType!,
                                size: sseMessage.payload.size!,
                                data: [sseMessage.payload.data]
                            }
                        ];
                    }
                })(),
                alert: m.alert, // Preserve existing alert
                lastMessageType: "object" // Track last message type
            }),
            ...(sseMessage.type === "alert" && {
                content: "",
                widgets: [],
                alert: {
                    type: sseMessage.payload.alertType,
                    message: sseMessage.payload.message
                },
                lastMessageType: "alert" // Track last message type
            })
        } : m)
    );
}

