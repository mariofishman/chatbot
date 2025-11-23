import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import {ArrowFatUp, Paperclip, SlidersHorizontal} from "phosphor-react";


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


  const scrollClass = "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-track]:bg-transparent"

  return (
    <div className="flex-[0_0_auto] bg-background-primary-subtle py-3 border-t border-border-strong flex flex-col gap-0.5 rounded-t-3xl">
      <Textarea
        autoFocus
        className={`body-sm border-none placeholder:text-text-disabled resize-none min-h-6 max-h-32 focus-visible:ring-0 text-text-primary shadow-none ${scrollClass}`}
        placeholder="write a message..."
        onKeyDown={handleKeyDown}
      />
      {/* bottom buttons */}
      <div className="flex justify-between gap-2 px-3">
        <div className="flex gap-2">
        <Button className="group size-7 rounded-full border border-border-focus">
          <SlidersHorizontal size={24} weight="duotone" className="text-icon-primary group-hover:text-icon-secondary" />
        </Button>
        <Button className="group size-7 rounded-full border border-border-focus">
          <Paperclip size={24} weight="duotone" className="text-icon-primary group-hover:text-icon-secondary" /> 
        </Button>
        </div>
        <Button className="group size-7 rounded-full border border-border-focus">
          <ArrowFatUp size={24} weight="duotone" className="size-5 text-icon-primary group-hover:text-icon-secondary" />
        </Button>
      </div>
    </div>
  );
}
