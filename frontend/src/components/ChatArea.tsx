import { ScrollArea } from "@/components/ui/scroll-area";
import {MessageBubble} from "@/components/MessageBubble";
import type { Message } from "@/types/message";
import { useEffect, useRef } from "react";

export function ChatArea(props:any) {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "auto" });
  }, [props.messages]);

  const messagesElements = props.messages.map((message: Message, index: number)=> {
    return (
      <MessageBubble  
        message={message.content}
        isUser={message.role === "user"}
        ref={index === props.messages.length - 1 ? lastMessageRef : null}
        key={index}
      />
    )
  })

  return (
    <ScrollArea className="flex-1 min-h-0">
      {messagesElements}
    </ScrollArea>
  );
}
