import { Target } from "lucide-react";

type SmallContactWidgetProps = {
  name: string;
  status: "draft" | "active" | "review" | "inactive";
  roleAndCompany?: string;
  profileImageUrl?: string;
  goalLinked?: boolean;
};

export default function smContactWidget({
  name,
  status,
  roleAndCompany,
  profileImageUrl,
  goalLinked = false,
}: SmallContactWidgetProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex flex-col items-center gap-0.5">
      {/* Card */}
      <div className="relative flex items-center justify-center p-2 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] active:opacity-90 w-15 h-15">
        {/* Goal Link Badge */}
        {goalLinked && (
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary">
            <Target
              size={8}
              className="text-primary-foreground"
              style={{ strokeWidth: 2 }}
            />
          </div>
        )}
        
        {/* Avatar Area */}
        <div className="relative">
          {profileImageUrl ? (
            <img
              src={profileImageUrl}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-foreground font-medium bg-card text-sm">
              {initials}
            </div>
          )}
        </div>
      </div>

      {/* Name below card with status dot */}
      <div className="flex items-center justify-center gap-1 w-full">
        {/* Status Dot */}
        <div
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-60 ${
            status === "draft" ? "bg-muted-foreground" :
            status === "active" ? "bg-chart-2" :
            status === "review" ? "bg-chart-4" :
            "bg-destructive"
          }`}
        />
        <div className="font-semibold text-center truncate cursor-pointer hover:opacity-80 text-xs font-semibold leading-tight text-foreground">
          {name}
        </div>
      </div>

      {/* Company below name */}
      {roleAndCompany && (
        <div className="text-center truncate w-full cursor-pointer hover:opacity-80 text-xs font-normal leading-tight w-15 text-muted-foreground">
          {roleAndCompany.split(' · ')[1] || roleAndCompany}
        </div>
      )}
    </div>
  );
}