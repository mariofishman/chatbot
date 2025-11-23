import type { ReactNode } from "react";


type WidgetHeaderProps = {
  objectType: "contact" | "task" | "goal";
  size: "sm" | "md" | "lg";
  icon: ReactNode;
  foregroundColor: string;
};

/**
 * WidgetHeader displays a header for a widget.
 * `objectType` is used as the label, rather than a separate label prop.
 */
export function WidgetHeader({
  objectType,
  size,
  icon,
  foregroundColor,
}: WidgetHeaderProps) {
  // Use CSS variables (see index.css) for header heights
  const headerHeights = {
    sm: "h-[var(--widget-header-h-sm)]",
    md: "h-[var(--widget-header-h-md)]",
    lg: "h-[var(--widget-header-h-lg)]",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="relative">
      <div
        className={`${headerHeights[size]} bg-widget-header-bg flex items-center justify-between px-3 rounded-t-2xl`}
      >
        {/* Left: Icon + Object Type Label */}
        <div className="flex items-center gap-1">

          {<span className={`${foregroundColor} ${iconSizes[size]}`}>
              {icon}
            </span>}
          <span
            className={`font-semibold ${foregroundColor} text-base leading-5`}
          >
            {objectType.charAt(0).toUpperCase() + objectType.slice(1)}
          </span>
        </div>

      </div>
      {/* Divider Line positioned 3px below header */}  
      <hr 
        className="absolute w-full border-t border-dashed border-widget-divider -bottom-1"
      />
    </div>
  );
}
