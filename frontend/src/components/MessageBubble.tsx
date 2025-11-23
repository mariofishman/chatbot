import { Card } from "@/components/ui/card";
import clsx from "clsx";

interface TextMessageBubbleProps {
  content: string;
  role: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export function MessageBubble({ content, role, ref }: TextMessageBubbleProps) {
  const displayTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const isUser = role === "user";

  const classes = {
    bubble : clsx("flex py-2 px-5", isUser ? "justify-end" : "justify-start"),
    card : clsx(
      "px-3 py-3 rounded-2xl border-none shadow-none",
      isUser ? "max-w-[80%] bg-background-bubble rounded-br-sm" : "max-w-[90%] border-none" 
    ),
    text : clsx("body-sm", isUser ? "text-text-secondary" : "text-text-primary"),
    time : clsx("body-xs ml-2 relative top-1 float-right opacity-60 pt-1"),
  }

  return (
    <div className={classes.bubble} ref={ref}>
      <Card className={classes.card}>
        <p className={classes.text}>
          {content}
          {isUser ? <span className={classes.time}>{displayTime}</span> : null}
        </p>
      </Card>
    </div>
  );
}
