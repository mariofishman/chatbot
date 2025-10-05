/**
 * SSE Message Envelope - structured JSON from backend
 */
export type SSEMessage = {
  payload: {
    // For type: "text"
    token?: string,
    
    // For type: "object"
    objectType?: "contact" | "task" | "goal",  // Extensible for future object types
    size?: "small" | "expandedSmall" | "medium" | "large" | "extraLarge",  // Extensible for future sizes
    data?: any,  // Object-specific data
    
    // For type: "alert"
    alertType?: "error" | "warning" | "success" | "connectionLost",
    message?: string,
  };
  meta: {
    requestId: string,
    timestamp?: string,
    stream: boolean,
  };
};

/**
 * Message type for chat system supporting text, widgets, and alerts.
 * 
 * Each message has:
 * - id: string
 * - role: "user" | "assistant"
 * - sections: array of MessageSection (see below)
 * 
 * MessageSection can be:
 * - type: "text" with content
 * - type: "widget" with widget object
 * - type: "alert" with alert object
 * 
 * Examples:
 * 
 * // Text message
 * {
 *   id: "1",
 *   role: "assistant",
 *   sections: [
 *     {
 *       type: "text",
 *       content: "Hello, here are your contacts"
 *     }
 *   ]
 * }
 * 
 * // Widget message
 * {
 *   id: "2",
 *   role: "assistant",
 *   sections: [
 *     {
 *       type: "widget",
 *       widget: {
 *         objectType: "contact",
 *         size: "small",
 *         data: {
 *           name: "John Doe",
 *           status: "active",
 *           roleAndCompany: "Developer · TechCorp",
 *           profileImageUrl: "/src/assets/facePics/john.jpg",
 *           goalLinked: true
 *         }
 *       }
 *     }
 *   ]
 * }
 * 
 * // Alert message
 * {
 *   id: "3",
 *   role: "assistant",
 *   sections: [
 *     {
 *       type: "alert",
 *       alert: {
 *         alertType: "connectionLost",
 *         message: "Connection lost"
 *       }
 *     }
 *   ]
 * }
 */
export type Message = {
  id: string;
  role: "user" | "assistant";
  sections: MessageSection[];
};

export type MessageSection = | {
  type: "text";
  content?: string;
} | {
  type: "widget";
  objectType?: "contact" | "task" | "goal";
  size?: "small" | "expandedSmall" | "medium" | "large" | "extraLarge";
  dataArray?:Array<any>;  // Array of object-specific data for concatenation
} | {
  type: "alert";
  alertType?: "error" | "warning" | "success" | "connectionLost";
  message?: string;
  }
;
