import { CalendarBlank } from "phosphor-react";

// Calendar component displays a calendar icon with the day and month of the given date.
//   <Calendar date={new Date()} /> will display the calendar icon with the day and month of the current date.

const taskStatusCalendarColor = {
    "done": "text-feedback-success-medium",
    "not due": "text-feedback-warning-medium",
    "overdue": "text-feedback-error-medium",
    "to do": "text-border-strong"
}

const taskStatusIcons = {
    "done": <div className="w-2 h-2 rounded-full bg-feedback-success-medium" />,
    "not due": <div className="w-2 h-2 rounded-full bg-feedback-warning-medium" />,
    "overdue": <div className="w-2 h-2 rounded-full bg-feedback-error-medium" />,
    "to do": <div className="w-2 h-2 rounded-full bg-border-strong" />
  }

export default function Calendar({ date, taskStatus }: { date: Date, taskStatus: string }) {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return (
        <div className="relative w-13 h-13 icon-wrapper flex flex-col items-center justify-center">
            <CalendarBlank weight="duotone" size={52} className={taskStatusCalendarColor[taskStatus]} />
            <div className="absolute inset-x-0 flex flex-col items-center justify-center bottom-2">
                <span className={`heading-xs ${taskStatusCalendarColor  [taskStatus]} -my-1.5`}> {day} </span>
                <span className="body-xs text-disabled m-0 p-0"> {month} </span>
            </div>
        </div>
    )
}