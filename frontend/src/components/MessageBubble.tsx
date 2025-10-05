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
    bubble : clsx("flex py-2 px-6", isUser ? "justify-end" : "justify-start"),
    card : clsx("max-w-[80%] p-3 sm:p-4 rounded-2xl", isUser ? "bg-primary text-primary-foreground border-primary rounded-br-sm" : "bg-card border-border rounded-bl-sm"),
    text : clsx("text-sm leading-relaxed whitespace-pre-wrap", !isUser && "text-card-foreground"),
    time : clsx("text-xs ml-2 align-baseline float-right", isUser ? "opacity-60 pt-1" : "text-muted-foreground pt-2"),
  }

  return (
    <div className={classes.bubble} ref={ref}>
      <Card className={classes.card}>
        <p className={classes.text}>
          {content}
          <span className={classes.time}>{displayTime}</span>
        </p>
      </Card>
    </div>
  );
}
