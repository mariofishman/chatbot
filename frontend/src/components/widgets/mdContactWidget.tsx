import { Card } from "@/components/ui/card";
import type { Contact } from "@/types/contact";
import { WidgetHeader } from "./shared/WidgetHeader";
import { AvatarWithStatus } from "./shared/AvatarWithStatus";
import ContactIcon from "@/assets/icons/contacts-svgrepo-com.svg?react";
import GoalIcon from "@/assets/icons/goal-aim-achievement-svgrepo-com.svg?react";

const taskStatusIcons = {
  "done": <div className="w-2 h-2 rounded-full bg-feedback-success-medium/50 border-2 border-feedback-success-medium" />,
  "not due": <div className="w-2 h-2 rounded-full bg-feedback-warning-medium/50 border-2 border-feedback-warning-medium" />,
  "overdue": <div className="w-2 h-2 rounded-full bg-feedback-error-medium/50 border-2 border-feedback-error-medium" />,
  "to do": <div className="w-2 h-2 rounded-full bg-border-strong/50 border-2 border-border-strong" />
}

export default function mdContactWidget({
  name,
  status,
  roleAndCompany,
  profileImageUrl,
  goalLinked = false,
  linkedGoals = [],
  generalInfo = "",
  tasks = [],
}: Contact) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  

  function createTaskSection(taskType: "not due" | "overdue" | "to do" | "done") {
      const count = tasks.reduce((sum, task) => sum + (task.taskStatus === taskType ? 1 : 0), 0) 
      return (
        <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-1 w-4/5">
          {taskStatusIcons[taskType]}
          <div>{taskType}</div>
        </div>
        <div className="body-xs text-text-secondary px-2">{count}</div>
      </div>
      )} 
    
    
  return (
    <Card 
      className="w-98 h-45 bg-background-pop px-3 py-2 flex flex-col items-center shadow-container gap-2 border-border-default"
    >


    {/* Profile Section */}
    <div className="flex gap-5 items-center w-full">
      {/* Avatar with Status */}
      <AvatarWithStatus
        profileImageUrl={profileImageUrl}
        initials={initials}
        status={status}
      />

    {/* Name and Role */}
    <div className="flex-1 max-h-13 text-left overflow-hidden">
          <div className="line-clamp-2 heading-base text-text-primary">
            {name}
          </div>
          {roleAndCompany && 
            <div className="line-clamp-2 body-xs text-text-secondary">
              {roleAndCompany}
            </div>}
        </div>
    </div>

    {/* Body */}
    <div className="flex flex-row w-full flex-1 gap-3">

      {/* Left Side */}
      <div className="flex flex-col gap-2 py-1 w-[45%]">
        {/* Goal Section */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span><GoalIcon className="w-3.5 h-3.5"/></span>  
            <span className="heading-xs text-text-primary ">Goal</span>
          </div>    
        {linkedGoals.length > 0 && (
          <div className="text-text-secondary body-xs">
            {linkedGoals[0].title}
          </div>)}
        </div>

        {/*Task Status Section */}
        <div className="flex flex-col gap-1">
          <div className="heading-xs text-text-primary">Tasks</div>
          {tasks.length > 0 && (<div className="flex items-center gap-3 w-full text-text-secondary body-xs">  
            <div className="flex flex-col w-1/2 items-center ">
              {createTaskSection("not due")}
              {createTaskSection("overdue")}
            </div>
            <div className="flex flex-col w-1/2 items-center ">
              {createTaskSection("to do")}
              {createTaskSection("done")}
            </div>
          </div>)}
          {tasks.length === 0 && <div className="text-text-secondary body-xs">No tasks available</div>}
        </div>

      </div>

      {/* Right Side */}
      {generalInfo && <div className="w-[55%] self-start line-clamp-6 break-words text-text-secondary body-xs">
        {generalInfo}
      </div>}
      {generalInfo === "" && <div className="w-1/2 h-full self-start line-clamp-6 break-words text-text-secondary body-xs">No general info available</div>}

    </div>
    </Card>
  );
  }
  
  