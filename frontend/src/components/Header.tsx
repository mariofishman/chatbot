import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="fixed top-4 right-4 z-0">
      <Avatar className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity">
        <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
          MF
        </AvatarFallback>
      </Avatar>
    </header>
  );
}