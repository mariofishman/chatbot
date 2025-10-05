import { ScrollArea } from "@/components/ui/scroll-area";
import {MessageBubble} from "@/components/MessageBubble";
import {MessageWidget} from "@/components/MessageWidget";
import { useEffect, useRef } from "react";
import {ConnectionLostAlert} from "@/components/ConnectionLostAlert";

export function ChatArea(props:any) {
  // console.log("ChatArea rendering with", props.messages.length, "messages");

  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "auto" });
  }, [props.messages]);

  const messagesElements = []
  for (let messageIndex = 0; messageIndex < props.messages.length; messageIndex++) {
    const message = props.messages[messageIndex];
    for (let sectionIndex = 0; sectionIndex < message.sections.length; sectionIndex++) {
      const section = message.sections[sectionIndex];
      // console.log(message.role, message.id, section.content);
      if (section.type === "text") {
        messagesElements.push(
         <MessageBubble  
            content={section.content || ""}
            role={message.role}
            ref={messageIndex === props.messages.length - 1 ? lastMessageRef : undefined}
            key={`${messageIndex}-${sectionIndex}`}
            />
          )
        } else if (section.type === "widget") {
          messagesElements.push(
            <MessageWidget
            dataArray={section.dataArray}
            size={section.size}
            objectType={section.objectType}
            ref={messageIndex === props.messages.length - 1 ? lastMessageRef : undefined}
            key={`${messageIndex}-${sectionIndex}`}
            />
          )
        } 
        else if (section.type === "alert") {
          messagesElements.push(
            <ConnectionLostAlert
            ref={messageIndex === props.messages.length - 1 ? lastMessageRef : undefined}
            key={`${messageIndex}-${sectionIndex}`}
            />
          )
        } else {return null}
      }
    };
  

  return (
    <ScrollArea className="flex-1 min-h-0">
      {messagesElements}
    </ScrollArea>
  );
}
