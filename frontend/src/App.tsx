import { Layout } from "@/components/Layout";
import { mockMessages } from "@/lib/mockMessages.ts";
import type { Message } from "@/types/message";
import { useState } from "react";
import { useSSE } from "./hooks/useSSE.ts";
import { getWidgetComponent, getNumberFromUserInput} from "@/lib/widgetMapping.ts";
import { mockContacts } from "./lib/mockContacts.ts";

export default function App() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [activeMessageId, setActiveMessageId] = useState<string | null>(null);
  useSSE(setMessages, setActiveMessageId, activeMessageId);
  
  
  function onSend(userInput:string) {
    const userId = crypto.randomUUID();
    setMessages((prev:Message[]) => [...prev, {
      id: userId, 
      role: "user",
      sections: [
        {
          type: "text",
          content: userInput,
        }
      ]
    }]);

    // NEW CODE IS: (REMOVE AFTER IMPLEMENTING BACKEND)
    // If the user input has a widget name and size and/or number of widgets it will return a message which in its 
    // sections will have a widget section with the widget component, object type, size, and data array. 
    const widgetResult = getWidgetComponent(userInput);
    const number = getNumberFromUserInput(userInput);
    let sections:any[] = [];
    
    if (widgetResult && number) {
      const {widget, objectType, size} = widgetResult;
      sections = [{type: "widget", 
                  objectType: objectType, 
                  size: size, 
                  dataArray: mockContacts.slice(0, number)}]
    } else if (widgetResult) {
      const {widget, objectType, size} = widgetResult;
      sections = [{type: "widget", 
                  objectType: objectType, 
                  size: size, 
                  dataArray: [mockContacts[0]]}]
    } 
    const assistantId = crypto.randomUUID();
    setMessages((prev:Message[]) => [...prev, {
      id: assistantId, 
      role: "assistant", 
      sections: sections,
    }]);
  
    if (sections.length === 0) {
      console.log("sections.length === 0");
      setActiveMessageId(assistantId);
    }

    // ORIGINAL code was (CHANGE AFTER IMPLEMENTING BACKEND):
    // const assistantId = crypto.randomUUID();
    // setMessages((prev:Message[]) => [...prev, {
    //   id: assistantId, 
    //   role: "assistant", 
    //   sections: []
    // }]);

    // setActiveMessageId(assistantId);

  }

  return <Layout messages={messages} onSend={onSend} />;
}




