import { Card } from "@/components/ui/card";
import { ConnectionLostAlert } from "@/components/ConnectionLostAlert";
import type { Message } from "@/types/message";
import clsx from "clsx";

interface MessageBubbleProps {
  message: Message;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export function MessageBubble({ message, ref }: MessageBubbleProps) {
  const displayTime = message.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const isUser = message.role === "user";

  const classes = {
    bubble : clsx("flex py-2 px-6", isUser ? "justify-end" : "justify-start"),
    card : clsx("max-w-[80%] p-3 sm:p-4 rounded-2xl", isUser ? "bg-primary text-primary-foreground border-primary rounded-br-sm" : "bg-card border-border rounded-bl-sm"),
    text : clsx("text-sm leading-relaxed whitespace-pre-wrap", !isUser && "text-card-foreground"),
    time : clsx("text-[10px] ml-2 align-baseline float-right", isUser ? "opacity-60 pt-1" : "text-muted-foreground pt-2"),
  }

  // Handle alert messages
  if (message.alert.type) {
    if (message.alert.type === "connectionLost") {
      return <ConnectionLostAlert ref={ref} />;
    }
    // Add other alert types here as needed
  }

  // Handle widget messages
  if (message.widget.type) {
    // TODO: Render widget based on message.widget.type and message.widget.data
    // This will be implemented in the next step
    return (
      <div className={classes.bubble} ref={ref}>
        Widget: {message.widget.type}
      </div>
    );
  }

  // Handle text messages
  return (
    <div className={classes.bubble} ref={ref}>
      <Card className={classes.card}>
        <p className={classes.text}>
          {message.content}
          <span className={classes.time}>{displayTime}</span>
        </p>
      </Card>
    </div>
  );
}
