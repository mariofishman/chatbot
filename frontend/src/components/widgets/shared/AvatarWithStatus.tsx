import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ReactNode } from "react";
import StatusRing from "@/assets/icons/status-ring.svg?react";
import CheckIcon from '@/assets/icons/CheckCircleIcon'
import DocumentTextIcon from '@/assets/icons/DocumentTextIcon.tsx'
import EyeIcon from '@/assets/icons/EyeIcon.tsx'
import ClockIcon from '@/assets/icons/ClockIcon.tsx'


type AvatarWithStatusProps = {
  profileImageUrl?: string;
  initials: string;
  status: "draft" | "active" | "review" | "inactive";
};

export function AvatarWithStatus({
  profileImageUrl,
  initials,
  status,
}: AvatarWithStatusProps) {
  const statusColors = {
    draft: "text-background-secondary",
    active: "text-feedback-success-dark",
    review: "text-feedback-warning-medium",
    inactive: "text-border-strong",
  };

  const iconClass = `${statusColors[status]} h-5 w-5 absolute -bottom-1 -right-1`
  const statusIcons = {
    draft: <DocumentTextIcon className={iconClass} />,
    active: <CheckIcon className={iconClass} />,
    review: <EyeIcon className={iconClass} />,
    inactive: <ClockIcon className={iconClass} />,
  };

  return (
    <div 
      className={`relative size-11`}>
      {/* Status Ring */}
        <StatusRing className={`${statusColors[status]} absolute inset-0 m-auto`} />
        
      {/* Avatar */}
      <Avatar className="absolute size-[85%] inset-0 m-auto">
        <AvatarImage src={profileImageUrl} alt={initials} />
        <AvatarFallback className={`bg-muted ${statusColors[status]} font-medium text-xs`}>{initials}</AvatarFallback>
      </Avatar>

      {/* Status Badge (bottom-right) */}
        {statusIcons[status]}
    </div>
  );
}

