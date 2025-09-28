import { Target } from "lucide-react";

type SmallContactWidgetProps = {
  name: string;
  status: "draft" | "active" | "review" | "inactive";
  roleAndCompany?: string;
  profileImageUrl?: string;
  goalLinked?: boolean;
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
      <div
        className="relative flex items-center justify-center p-2 rounded-lg bg-[#6A6A6A] shadow-[0px_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0px_3px_8px_rgba(0,0,0,0.25)] transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] active:opacity-90"
        style={{
          width: "60px",
          height: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Goal Link Badge */}
        {goalLinked && (
          <div
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: designTokens.colors.blue,
            }}
          >
            <Target
              size={8}
              className="text-white"
              style={{
                strokeWidth: 2,
              }}
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
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#333333] font-medium"
              style={{
                backgroundColor: designTokens.colors.white,
                fontSize: "14px",
              }}
            >
              {initials}
            </div>
          )}


        </div>
      </div>

      {/* Name below card with status dot */}
      <div className="flex items-center justify-center gap-1 w-full">
        {/* Status Dot */}
        <div
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{
            backgroundColor: statusColors[status],
            opacity: 0.6,
          }}
        />
        <div
          className="font-semibold text-center truncate cursor-pointer hover:opacity-80"
          style={{
            fontSize: "10px",
            fontWeight: 600,
            lineHeight: 1.2,
            color: "#333333",
          }}
        >
          {name}
        </div>
      </div>

      {/* Company below name */}
      {roleAndCompany && (
        <div
          className="text-center truncate w-full cursor-pointer hover:opacity-80"
          style={{
            fontSize: "8px",
            fontWeight: 400,
            lineHeight: 1.2,
            width: "60px",
            color: "#666666",
          }}
        >
          {roleAndCompany.split(' · ')[1] || roleAndCompany}
        </div>
      )}
    </div>
  );
}