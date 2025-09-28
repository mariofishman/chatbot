/**
 * Message type for chat system supporting text, widgets, and alerts
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
 *     type: "smContactWidget",
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
 *     data: {}
 *   }
 * }
 */
export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;            // Text content - empty for widget/alert messages
  widget: {                   // Widget data - empty object for text/alert messages
    type?: "smContactWidget" | "mdContactWidget" | "lgContactWidget";
    data?: any;               // Widget-specific data (contact info, etc.)
  };
  alert: {                    // Alert data - empty object for text/widget messages
    type?: "connectionLost" | "error" | "warning" | "success";
    data?: any;               // Alert-specific data
  };
  timestamp?: string;
};
  