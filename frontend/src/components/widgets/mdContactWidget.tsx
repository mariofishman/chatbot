import { Target, Calendar, Tag, Link } from "lucide-react";

type MediumContactWidgetProps = {
  name: string;
  status: "draft" | "active" | "review" | "inactive";
  roleAndCompany?: string;
  profileImageUrl?: string;
  goalLinked?: boolean;
  tags?: string[];
  lastInteraction?: string;
  suggestedActions?: string[];
};

export default function mdContactWidget({
  name,
  status,
  roleAndCompany,
  profileImageUrl,
  goalLinked = false,
  tags = [],
  lastInteraction = "2 days ago",
  suggestedActions = ["Set Reminder", "Add Note", "Update Status"],
}: MediumContactWidgetProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      {/* Header with Avatar and Goal Link */}
      <div className="flex items-start gap-3 mb-4">
        {/* Avatar */}
        <div className="relative">
          {profileImageUrl ? (
            <img
              src={profileImageUrl}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-foreground font-semibold bg-card text-lg">
              {initials}
            </div>
          )}
          
          {/* Goal Link Badge */}
          {goalLinked && (
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary">
              <Target size={12} className="text-primary-foreground" style={{ strokeWidth: 2 }} />
            </div>
          )}
        </div>

        {/* Name and Role */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            <div
              className={`w-2 h-2 rounded-full ${
                status === "draft" ? "bg-muted-foreground" :
                status === "active" ? "bg-chart-2" :
                status === "review" ? "bg-chart-4" :
                "bg-destructive"
              }`}
            />
          </div>
          {roleAndCompany && (
            <p className="text-sm text-muted-foreground">{roleAndCompany}</p>
          )}
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex items-center gap-2 mb-3">
          <Tag size={14} className="text-muted-foreground" />
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-xs text-foreground rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Last Interaction */}
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={14} className="text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Last interaction: {lastInteraction}</span>
      </div>

      {/* Suggested Actions */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 mb-2">
          <Link size={14} className="text-primary" />
          <span className="text-sm text-primary font-medium">Suggested Actions</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestedActions.map((action, index) => (
            <button
              key={index}
              className="px-3 py-1 bg-muted text-xs font-medium text-foreground rounded-md hover:bg-accent transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}