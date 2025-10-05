/**
 * SSE Message Envelope - structured JSON from backend
 */
export type SSEMessage1 = {
  type: "text" | "object" | "alert";
  payload: {
    // For type: "text"
    token?: string;
    
    // For type: "object"
    objectType?: "contact" | "task" | "goal";  // Extensible for future object types
    size?: "small" | "expandedSmall" | "medium" | "large" | "extraLarge";  // Extensible for future sizes
    data?: any;  // Object-specific data
    
    // For type: "alert"
    alertType?: "error" | "warning" | "success" | "connectionLost";
    message?: string;
  };
  meta: {
    requestId: string;
    timestamp?: string;
    stream: boolean;
  };
};

/**
 * Frontend Message type for chat system supporting text, widgets, and alerts
 * 
 * All messages have the same structure with conditional fields:
 * - Text messages: content populated, widget/alert empty
 * - Widget messages: widget populated, content/alert empty  
 * - Alert messages: alert populated, content/widget empty
 * 
 * @example Text message:
 * {
 *   id: "1",
 *   role: "assistant", 
 *   content: "Hello, here are your contacts",
 *   widget: {},
 *   alert: {}
 * }
 * 
 * @example Widget message:
 * {
 *   id: "2",
 *   role: "assistant",
 *   content: "",
 *   widget: {
 *     objectType: "contact",
 *     size: "small",
 *     data: { name: "John Doe", status: "active", roleAndCompany: "Developer · TechCorp", profileImageUrl: "/src/assets/facePics/john.jpg", goalLinked: true }
 *   },
 *   alert: {}
 * }
 * 
 * @example Alert message:
 * {
 *   id: "3", 
 *   role: "assistant",
 *   content: "",
 *   widget: {},
 *   alert: {
 *     type: "connectionLost",
 *     message: "Connection lost"
 *   }
 * }
 */
export type Message1 = {
  id: string;
  role: "user" | "assistant";
  content: string;            // Text content - empty for widget/alert messages
  widgets: {                  // Array of widget blocks
    objectType: "contact" | "task" | "goal";  // Extensible for future object types
    size: "small" | "expandedSmall" | "medium" | "large" | "extraLarge";  // Extensible for future sizes
    data: any[];             // Array of object-specific data for concatenation
  }[];
  alert: {                    // Alert data - empty object for text/widget messages
    type?: "error" | "warning" | "success" | "connectionLost";
    message?: string;         // Alert message text
  };
  // lastMessageType?: "text" | "object" | "alert"; // Track last message type for concatenation logic
  // timestamp?: string;
};
  