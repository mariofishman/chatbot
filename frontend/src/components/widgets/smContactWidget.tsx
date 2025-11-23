import { Card } from "@/components/ui/card";
import type { Contact } from "@/types/contact";
import { AvatarWithStatus } from "./shared/AvatarWithStatus.tsx";
import { TextCarousel } from "./shared/TextCarousel.tsx";
import {useMemo} from "react";
import Calendar from './shared/Calendar.tsx'



const taskStatusIcons = {
  "done": <div className="w-2 h-2 rounded-full bg-feedback-success-medium/50 border-2 border-feedback-success-medium" />,
  "not due": <div className="w-2 h-2 rounded-full bg-feedback-warning-medium/50 border-2 border-feedback-warning-medium" />,
  "overdue": <div className="w-2 h-2 rounded-full bg-feedback-error-medium/50 border-2 border-feedback-error-medium" />,
  "to do": <div className="w-2 h-2 rounded-full bg-border-strong/50 border-2 border-border-strong" />
}


export default function SmContactWidget({
  name,
  status,
  roleAndCompany,
  profileImageUrl,
  generalInfo = "",
  goalLinked = false,
  tasks = [],
  linkedGoals = [],
}: Contact) {
  const initials = name
  .split(" ")
  .map((n) => n[0])
  .join("")
  .toUpperCase()
  .slice(0, 2);
  
  {/* Function that takes as args a tasktype and returns a section that shows the task type and the count of tasks of that type*/}
  function createTaskSection(taskType: "not due" | "overdue" | "to do" | "done") {
    const count = tasks.reduce((sum, task) => sum + (task.taskStatus === taskType ? 1 : 0), 0) 
    return (
      <div className="flex items-center w-full justify-between">
      <div className="flex items-center gap-2 w-4/5">
        {taskStatusIcons[taskType]}
        <div className="body-xs text-text-secondary">{taskType}</div>
      </div>
      <div className="body-xs text-text-secondary px-2.5">{count}</div>
    </div>
    )} 

  {/* mapping the task summary to an array of sections */}
  const taskSummary = Object.keys(taskStatusIcons).map(key => createTaskSection(key as "not due" | "overdue" | "to do" | "done")) 
    
  const slides = useMemo(() => {
    const slides: React.ReactNode[] = []
    const carouselTextClass = "body-xs text-text-secondary opacity-80 line-clamp-6 break-words max-w-40 text-left"
    
    if (generalInfo) {
      slides.push(<div key="general-info" className={carouselTextClass}>{generalInfo}</div>)
    } else {
      slides.push(<div key="general-info" className={carouselTextClass}>No general info available</div>)}

    // if (goalLinked) {
    //   slides.push(<div key="goal" className={carouselTextClass}>{linkedGoals[linkedGoals.length - 1].title}</div>)
    // } else {
    //   slides.push(<div key="goal" className={carouselTextClass}>No goal details available</div>)}
  
    if (tasks && tasks.length > 0) {
      slides.push(
    <div key={`task`} className={`flex items-start gap-1`}>
      <div className="body-xs text-text-secondary">
        <Calendar date={new Date(tasks[tasks.length - 1].date)} taskStatus={tasks[tasks.length - 1].taskStatus} />
      </div>
      <div className={carouselTextClass}>{tasks[tasks.length - 1].description}</div>
    </div>)
      slides.push(
        <div key={'taskSummary'} className="flex flex-col gap-2">
          {taskSummary}
        </div>
      )
    } else {
      slides.push(<div key="task" className={carouselTextClass}>No task history available</div>)
      slides.push(<div key="task" className={carouselTextClass}>No task history available</div>)
    }
    return slides;
  }, [generalInfo, goalLinked, tasks]);

  return (
    <Card 
      className="w-40 h-45 bg-background-pop px-2 pt-2 pb-3 flex flex-col items-center shadow-container gap-1.5 border-border-default relative"
    >
      {/* Profile Section */}
      <div className="flex gap-2 items-center w-full">
        {/* Avatar with Status */}
        <AvatarWithStatus
          profileImageUrl={profileImageUrl}
          initials={initials}
          status={status}
        />

        {/* Name */}
        <div className="flex-1 text-left heading-sm text-text-primary line-clamp-2 break-words">
          {name}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 max-w-40 px-2 pt-1.5 pb-2 gap-2">

        {/* General Info Carousel */}
        {(slides && slides.length > 0) && (
          <TextCarousel 
              slides={slides}
            />
        )}

      </div>
    </Card>
  );
}

