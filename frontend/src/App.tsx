import { Layout } from "@/components/Layout";
import { mockMessages } from "@/lib/mockMessages.ts";
import type { Message } from "@/types/message";
import { useState } from "react";
import { useSSE } from "./hooks/useSSE";

export default function App() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [activeMessageId, setActiveMessageId] = useState<string | null>(null);
  useSSE(setMessages, setActiveMessageId, activeMessageId);
  
  function onSend(userInput:string) {
    const userId = crypto.randomUUID();
    setMessages((prev:Message[]) => [...prev, {id: userId, role: "user", content: userInput}]);
    
    const assistantId = crypto.randomUUID();
    setMessages((prev:Message[]) => [...prev, {id: assistantId, role: "assistant", content: ""}]);

    setActiveMessageId(assistantId);
  }

  return <Layout messages={messages} onSend={onSend} />;
}




