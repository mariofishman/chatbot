import { Textarea } from "@/components/ui/textarea";

export function InputArea(props:any) {

  const handleKeyDown = (e:any) => {
    if (!e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      const text = e.currentTarget.value.trim();
      if (!text) return;
      props.onSend(text);
      e.currentTarget.value = "";
    }
  }
  
  return (
    <div className="flex-[0_0_auto] mx-auto mb-2 w-[calc(100%-40px)] rounded-lg px-4 py-2 shadow-lg bg-card border border-primary border-muted focus-within:border-primary focus-within:border-2">
      <Textarea
        autoFocus
        className="w-full bg-transparent border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground resize-none min-h-[calc(1lh+1rem)] max-h-[calc(5lh+1rem)] overflow-y-auto [mask:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        placeholder="write a message..."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
