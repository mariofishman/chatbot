import { Target, Edit3, Calendar, Tag, Link } from "lucide-react";

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

// Design system tokens
const designTokens = {
  colors: {
    purple: "#8A63D2",
    orange: "#FF9500",
    green: "#34C759",
    blue: "#007AFF",
    yellow: "#FFCC00",
    gray: "#8E8E93",
    red: "#FF3B30",
    pink: "#FF69B4",
    white: "#FFFFFF",
    lightGray: "#F2F2F7",
    mediumGray: "#8E8E93",
    darkGray: "#1C1C1E",
    black: "#000000",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "32px",
    "4xl": "48px",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "32px",
    "4xl": "48px",
  },
  shadows: {
    sm: "0px 1px 3px rgba(0, 0, 0, 0.3)",
    md: "0px 4px 8px rgba(0, 0, 0, 0.3)",
    lg: "0px 8px 16px rgba(0, 0, 0, 0.4)",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "20px",
    full: "9999px",
  },
};

const statusColors = {
  draft: designTokens.colors.gray,
  active: designTokens.colors.green,
  review: designTokens.colors.yellow,
  inactive: designTokens.colors.red,
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
    <div
      className="w-full p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
      style={{
        backgroundColor: designTokens.colors.white,
        border: `1px solid ${designTokens.colors.lightGray}`,
        borderRadius: designTokens.borderRadius.lg,
      }}
    >
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        {/* Left: Avatar and Basic Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative">
            {profileImageUrl ? (
              <img
                src={profileImageUrl}
                alt={name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold"
                style={{
                  backgroundColor: designTokens.colors.blue,
                  fontSize: designTokens.fontSizes.lg,
                }}
              >
                {initials}
              </div>
            )}
            {/* Status Dot */}
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center"
              style={{
                backgroundColor: statusColors[status],
              }}
            />
          </div>

          {/* Name and Role */}
          <div>
            <h3
              className="font-semibold cursor-pointer hover:opacity-80"
              style={{
                fontSize: designTokens.fontSizes.xl,
                fontWeight: designTokens.fontWeights.semibold,
                color: designTokens.colors.darkGray,
              }}
            >
              {name}
            </h3>
            {roleAndCompany && (
              <p
                className="cursor-pointer hover:opacity-80"
                style={{
                  fontSize: designTokens.fontSizes.sm,
                  fontWeight: designTokens.fontWeights.regular,
                  color: designTokens.colors.mediumGray,
                }}
              >
                {roleAndCompany}
              </p>
            )}
          </div>
        </div>

        {/* Right: Goal Link Badge */}
        {goalLinked && (
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${designTokens.colors.blue}20`,
            }}
          >
            <Target size={16} style={{ color: designTokens.colors.blue }} />
            <span
              style={{
                fontSize: designTokens.fontSizes.xs,
                fontWeight: designTokens.fontWeights.medium,
                color: designTokens.colors.blue,
              }}
            >
              Goal Linked
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="space-y-3">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex items-center gap-2">
            <Tag size={14} style={{ color: designTokens.colors.mediumGray }} />
            <div className="flex gap-1 flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-md cursor-pointer hover:opacity-80"
                  style={{
                    backgroundColor: designTokens.colors.lightGray,
                    fontSize: designTokens.fontSizes.xs,
                    color: designTokens.colors.darkGray,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Last Interaction */}
        <div className="flex items-center gap-2">
          <Calendar size={14} style={{ color: designTokens.colors.mediumGray }} />
          <span
            className="cursor-pointer hover:opacity-80"
            style={{
              fontSize: designTokens.fontSizes.sm,
              color: designTokens.colors.mediumGray,
            }}
          >
            Last interaction: {lastInteraction}
          </span>
        </div>

        {/* Linked Goals */}
        {goalLinked && (
          <div className="flex items-center gap-2">
            <Link size={14} style={{ color: designTokens.colors.blue }} />
            <span
              className="cursor-pointer hover:opacity-80"
              style={{
                fontSize: designTokens.fontSizes.sm,
                color: designTokens.colors.blue,
              }}
            >
              View linked goals
            </span>
          </div>
        )}
      </div>

      {/* Suggested Actions */}
      <div className="mt-4 pt-4 border-t" style={{ borderColor: designTokens.colors.lightGray }}>
        <div className="flex gap-2 flex-wrap">
          {suggestedActions.map((action, index) => (
            <button
              key={index}
              className="px-3 py-1 rounded-md cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                backgroundColor: designTokens.colors.lightGray,
                fontSize: designTokens.fontSizes.xs,
                fontWeight: designTokens.fontWeights.medium,
                color: designTokens.colors.darkGray,
              }}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
