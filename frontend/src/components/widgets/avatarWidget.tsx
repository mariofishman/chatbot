import { Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarWidgetProps = {
  name: string;
  status: "draft" | "active" | "review" | "inactive";
  roleAndCompany?: string;
  profileImageUrl?: string;
  goalLinked?: boolean;
};

export default function AvatarWidget({
  name,
  status,
  roleAndCompany,
  profileImageUrl,
  goalLinked = false,
}: AvatarWidgetProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const statusColors = {
    draft: "bg-muted-foreground",
    active: "bg-chart-2", 
    review: "bg-chart-4",
    inactive: "bg-destructive"
  };

  const handleClick = () => {
    // Placeholder for future interactivity
    console.log(`Clicked on ${name}`);
  };

  return (
    <button 
      onClick={handleClick}
      className="flex flex-col items-center gap-0.5 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg p-1 cursor-pointer"
    >
      {/* Card Container */}
      <Card className="relative w-15 h-15 flex items-center justify-center bg-card border-border shadow-xs hover:shadow-sm transition-all duration-200">
        {/* Status Dot - Top Right */}
        <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${statusColors[status]} opacity-80`} />
        
        {/* Avatar */}
        <Avatar className="w-10 h-10">
          <AvatarImage src={profileImageUrl} alt={name} />
          <AvatarFallback className="bg-muted text-foreground font-medium text-sm">
            {initials}
          </AvatarFallback>
        </Avatar>

        {/* Goal Link Badge - Bottom Right */}
        {goalLinked && (
          <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full flex items-center justify-center bg-primary">
            <Target
              size={6}
              className="text-primary-foreground"
              style={{ strokeWidth: 2 }}
            />
          </div>
        )}
      </Card>

      {/* Name */}
      <div className="text-xs font-semibold text-foreground text-center truncate w-full">
        {name}
      </div>

      {/* Company */}
      {roleAndCompany && (
        <div className="text-xs font-normal text-muted-foreground text-center truncate w-full">
          {roleAndCompany}
        </div>
      )}
    </button>
  );
}

// Example usage:
// <smContactWidget 
//   name="Alex" 
//   status="active" 
//   roleAndCompany="Buyer · Fishmart" 
//   goalLinked 
// />
