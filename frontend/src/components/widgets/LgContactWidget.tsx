import { Card } from "@/components/ui/card";
import type { Contact } from "@/types/contact";
import { AvatarWithStatus } from "./shared/AvatarWithStatus.tsx";
import GoalIcon from "@/assets/icons/goal-aim-achievement-svgrepo-com.svg?react";
import Calendar from './shared/Calendar.tsx'
import ContactIcon from "@/assets/icons/contacts-svgrepo-com.svg?react";
import TasksIcon from "@/assets/icons/task-square-svgrepo-com.svg?react";


const taskStatusIcons = {
  "done": <div className="w-2.5 h-2.5 rounded-full bg-feedback-success-medium/50 border-2 border-feedback-success-medium" />,
  "not due": <div className="w-2.5 h-2.5 rounded-full bg-feedback-warning-medium/50 border-2 border-feedback-warning-medium" />,
  "overdue": <div className="w-2.5 h-2.5 rounded-full bg-feedback-error-medium/50 border-2 border-feedback-error-medium" />,
  "to do": <div className="w-2.5 h-2.5 rounded-full bg-border-strong/50 border-2 border-border-strong" />
}

export default function LgContactWidget({
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
        <div className="flex items-center w-full justify-between p-1">
        <div className="flex items-center gap-1 w-4/5">
          {taskStatusIcons[taskType]}
          <div className="heading-xs text-text-primary">{taskType}</div>
        </div>
        <div className="heading-xs text-text-secondary px-2">{count}</div>
      </div>
      )} 
    
    
  return (
    <Card 
      className="w-98 h-108 bg-background-pop px-3 py-2 flex flex-col items-center shadow-container gap-3 border-border-default"
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
    <div className="flex flex-col w-full flex-1 gap-5">
        
        {/* Info Section */}
        <div className="flex flex-row w-full flex-1 gap-3">
          {/* Left Side */}
          <div className="heading-xs text-text-primary w-[20%]">
          <div className="flex items-center gap-1 relative top-2">
              <span><ContactIcon className="w-3.5 h-3.5 text-icon-primary"/></span>  
              <span className="heading-xs text-text-primary ">Info</span>
            </div>    
          </div>
          {/* Right Side */}
          {generalInfo && <div className="w-[80%] self-start line-clamp-3 break-words text-text-secondary body-xs">
            {generalInfo}
          </div>}
        </div>

        {/* Goal Section */}
        <div className="flex flex-row w-full flex-1 gap-3">
          {/* Left Side */}
          <div className="heading-xs text-text-primary w-[20%]">
            <div className="flex items-center gap-1 relative top-0.5">
              <span><GoalIcon className="w-3.5 h-3.5"/></span>  
              <span className="heading-xs text-text-primary relative -top-0.5">Goal</span>
            </div>    
          </div>
          {/* Right Side */}
        {linkedGoals.length > 0 && (
          <div className="text-text-secondary body-xs">
            {linkedGoals[0].title}
          </div>)}
        </div>

        {/* Tasks Section */}
        <div className="flex flex-row w-full flex-1 gap-3">
          {/* Left Side */}
          <div className="heading-xs text-text-primary w-[20%]">
          <div className="flex items-center gap-1 relative top-2">
              <span><TasksIcon className="w-3.5 h-3.5 text-icon-secondary"/></span>  
              <span className="heading-xs text-text-primary ">Tasks</span>
            </div>            </div>  
            {/* Right Side */}
        <div className="flex flex-col gap-1">
          {tasks.length > 0 && (<div className="flex items-center gap-5 w-full text-text-secondary body-xs">  
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
        

        {/* Calendar Section */}
        <div className="grid grid-cols-2 gap-y-4">
        {tasks && tasks.length > 0 && tasks.slice(0, 6).map(task => {
            return (
              <div key={task.date} className="flex flex-row flex-1 gap-1">
                <div>
                  <Calendar date={new Date(task.date)} taskStatus={task.taskStatus} />
                </div>
                <div className="body-xs text-text-secondary line-clamp-3 break-words">
                  {task.description}
                </div>
              </div>
            )
          })
        }
        </div> 
    </div>
    <div className="flex flex-row w-full flex-1 gap-3">


    </div>
    </Card>
  );
  }
  
  