export interface Contact {
  name: string;
  status: "active" | "draft" | "review" | "inactive";
  roleAndCompany: string;
  profileImageUrl?: string;
  goalLinked: boolean;
  suggestedActions?: string[];
  linkedGoals?: { id: string; title: string }[];
  generalInfo?: string;
  tasks?: {
    date: string;
    description: string;
    taskStatus: "to do" | "overdue" | "not due" | "done";
  }[];
};
