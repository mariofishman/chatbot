import type { Message, MessageSection, SSEMessage } from "../types/message";
import { useEffect } from "react";

const USE_MOCK = true;

// Mock SSE messages following new architecture
const mockTextSSE: SSEMessage = {
  payload: {
    token: "This is a test message."
  },
  meta: {
    requestId: "mock-text-123",
    stream: true
  }
};

const mockObjectSSE: SSEMessage = {
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
                const messageSequence = [0,0,1,1,1,1,3,2,2,1,1,0,0]; // Example sequence: text, object, text, object2, alert, object
                // Each entry: { event: "text" | "object" | "alert", data: SSEMessage }
                const mockSSE = [
                    { event: "text", data: mockTextSSE },
                    { event: "object", data: mockObjectSSE },
                    { event: "object", data: mockObjectSSE2 },
                    { event: "alert", data: mockAlertSSE }
                ];

                let currentIndex = 0;

                const interval = setInterval(() => {
                    if (currentIndex < messageSequence.length) {
                        const messageIndex = messageSequence[currentIndex];
                        const { event, data } = mockSSE[messageIndex];

                        if (event === "text") {
                            handleTextSSE(data, setMessages);
                        } else if (event === "object") {
                            handleObjectSSE(data, setMessages);
                        } else if (event === "alert") {
                            handleAlertSSE(data, setMessages);
                        }
                        currentIndex++;
                    } else {
                        // All messages sent - trigger "done" event
                        clearInterval(interval);

                        // setMessages(prev => {
                        //     console.log(prev);
                        //     return prev;
                        // });
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
                handleTextSSE(sseMessage, setMessages);
            } catch (error) {
                console.error("Error parsing text SSE:", error);
            }
        });
        
        // Handle object events
        eventSource.addEventListener("object", (event) => {
            try {
                const sseMessage: SSEMessage = JSON.parse(event.data);
                handleObjectSSE(sseMessage, setMessages);
            } catch (error) {
                console.error("Error parsing object SSE:", error);
            }
        });
        
        // Handle alert events
        eventSource.addEventListener("alert", (event) => {
            try {
                const sseMessage: SSEMessage = JSON.parse(event.data);
                handleAlertSSE(sseMessage, setMessages);
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
                payload: {
                    alertType: "connectionLost",
                    message: "Connection lost"
                },
                meta: {
                    requestId: "error-" + Date.now(),
                    stream: false
                }
            };
            handleAlertSSE(connectionLostSSE, setMessages);
            setActiveMessageId(null);
        }
        
        return () => {
            eventSource.close()
        }
    
    }, [activeMessageId, setMessages, setActiveMessageId])
}

// Helper function to process SSE messages and update the frontend Message
// function processSSEMessage(sseMessage: SSEMessage, setMessages: React.Dispatch<React.SetStateAction<Message[]>>, activeMessageId: string) {

// }

function handleTextSSE(sseMessage: SSEMessage, setMessages: React.Dispatch<React.SetStateAction<Message[]>>) {
    setMessages(prev => {
        if (prev.length === 0) {
            return [
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    sections: [{ type: "text", content: sseMessage.payload.token || "" }]
                }
            ];
        }
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        const lastMessage = { ...newMessages[lastIndex] };
        const sections = [...(lastMessage.sections || [])] as MessageSection[];
        const lastSection = sections.at(-1);

        if (lastSection === undefined || lastSection.type !== "text") {
            sections.push({ type: "text", content: sseMessage.payload.token || "" });
        } else {
            const updatedSection = { ...lastSection, content: (lastSection.content || "") + (sseMessage.payload.token || "") };
            sections[sections.length - 1] = updatedSection;
        }
        lastMessage.sections = sections;
        newMessages[lastIndex] = lastMessage;
        return newMessages;
    });
}


function handleObjectSSE(sseMessage: SSEMessage, setMessages: React.Dispatch<React.SetStateAction<Message[]>>) {
    setMessages(prev => {
        if (prev.length === 0) {
            return [
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    sections: [
                        {
                            type: "widget",
                            objectType: sseMessage.payload.objectType,
                            size: sseMessage.payload.size,
                            dataArray: [sseMessage.payload.data],
                        }
                    ]
                }
            ];
        }
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        const lastMessage = { ...newMessages[lastIndex] };
        const sections = [...(lastMessage.sections || [])] as MessageSection[];
        const lastSection = sections.at(-1);

        if (
            lastSection &&
            lastSection.type === "widget" &&
            lastSection.objectType === sseMessage.payload.objectType &&
            lastSection.size === sseMessage.payload.size
        ) {
            const updatedSection = {
                ...lastSection,
                dataArray: [
                    ...(lastSection.dataArray || []),
                    sseMessage.payload.data 
                ]
            };
            sections[sections.length - 1] = updatedSection;
        } else {
            sections.push({
                type: "widget",
                objectType: sseMessage.payload.objectType,
                size: sseMessage.payload.size,
                dataArray: [sseMessage.payload.data],
            });
        }
        lastMessage.sections = sections;
        newMessages[lastIndex] = lastMessage;
        return newMessages;
    });
}

function handleAlertSSE(
  sseMessage: SSEMessage,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) {
  setMessages(prev => {
    if (prev.length === 0) {
      return [
        {
          id: crypto.randomUUID(),
          role: "assistant",
          sections: [
            {
              type: "alert",
              alertType: sseMessage.payload.alertType,
              message: sseMessage.payload.message,
            }
          ]
        }
      ];
    }
    const newMessages = [...prev];
    const lastIndex = newMessages.length - 1;
    const lastMessage = { ...newMessages[lastIndex] };
    const sections = [...(lastMessage.sections || [])] as MessageSection[];
    sections.push({
      type: "alert",
      alertType: sseMessage.payload.alertType,
      message: sseMessage.payload.message,
    });
    lastMessage.sections = sections;
    newMessages[lastIndex] = lastMessage;
    return newMessages;
  });
}
