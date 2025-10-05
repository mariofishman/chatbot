export interface Contact {
  name: string;
  status: "draft" | "active" | "review" | "inactive";
  roleAndCompany?: string;
  profileImageUrl?: string;
  goalLinked?: boolean;
  tags?: string[];
  lastInteraction?: string;
  suggestedActions?: string[];
}

export const mockContacts: Contact[] = [
  {
    name: "Ashwin",
    status: "active",
    roleAndCompany: "Buyer · Fishmart",
    profileImageUrl: "/src/assets/facePics/1516818428248.jpeg",
    goalLinked: true,
    tags: ["Professional", "Follow-up"],
    lastInteraction: "2 days ago",
    suggestedActions: ["Set Reminder", "Add Note", "Update Status"]
  },
  {
    name: "Jordan",
    status: "draft",
    roleAndCompany: "Manager · TechCorp",
    profileImageUrl: "/src/assets/facePics/1718187560092.jpeg",
    goalLinked: false,
    tags: ["Technical", "Priority"],
    lastInteraction: "1 week ago",
    suggestedActions: ["Schedule Meeting", "Send Proposal", "Follow-up"]
  },
  {
    name: "Kaya",
    status: "review",
    roleAndCompany: "Designer · Studio",
    profileImageUrl: "/src/assets/facePics/1728877732930.jpeg",
    goalLinked: true,
    tags: ["Creative", "Design"],
    lastInteraction: "3 days ago",
    suggestedActions: ["Review Portfolio", "Discuss Project", "Send Samples"]
  },
  {
    name: "Cameron",
    status: "inactive",
    roleAndCompany: "Developer · CodeLab",
    profileImageUrl: "/src/assets/facePics/1735343022993.jpeg",
    goalLinked: false,
    tags: ["Development", "Inactive"],
    lastInteraction: "2 weeks ago",
    suggestedActions: ["Reconnect", "Check Status", "Update Contact"]
  },
  {
    name: "Aysha",
    status: "active",
    roleAndCompany: "Analyst · DataCo",
    profileImageUrl: "/src/assets/facePics/1756917437642.jpeg",
    goalLinked: true,
    tags: ["Analytics", "Data"],
    lastInteraction: "1 day ago",
    suggestedActions: ["Request Report", "Schedule Analysis", "Share Insights"]
  },
  {
    name: "Zahir",
    status: "review",
    roleAndCompany: "Consultant · ProAdvice",
    profileImageUrl: "/src/assets/facePics/1758534884497.jpeg",
    goalLinked: false,
    tags: ["Consulting", "Expert"],
    lastInteraction: "4 days ago",
    suggestedActions: ["Book Consultation", "Request Quote", "Discuss Strategy"]
  },
  {
    name: "Emma",
    status: "active",
    roleAndCompany: "Marketing · BrandCo",
    goalLinked: true,
    tags: ["Marketing", "Brand"],
    lastInteraction: "5 days ago",
    suggestedActions: ["Campaign Review", "Brand Discussion", "Marketing Plan"]
  },
  {
    name: "Mike",
    status: "draft",
    roleAndCompany: "Sales · RevenueInc",
    goalLinked: false,
    tags: ["Sales", "Revenue"],
    lastInteraction: "6 days ago",
    suggestedActions: ["Sales Call", "Demo Request", "Proposal Review"]
  },
  {
    name: "Sarah",
    status: "review",
    roleAndCompany: "HR · PeopleFirst",
    goalLinked: true,
    tags: ["HR", "People"],
    lastInteraction: "1 week ago",
    suggestedActions: ["HR Meeting", "Policy Review", "Team Discussion"]
  },
  {
    name: "David",
    status: "inactive",
    roleAndCompany: "Finance · MoneyCorp",
    goalLinked: false,
    tags: ["Finance", "Inactive"],
    lastInteraction: "3 weeks ago",
    suggestedActions: ["Financial Review", "Budget Discussion", "Reconnect"]
  },
  {
    name: "Lisa",
    status: "active",
    roleAndCompany: "Operations · FlowTech",
    goalLinked: true,
    tags: ["Operations", "Process"],
    lastInteraction: "2 days ago",
    suggestedActions: ["Process Review", "Efficiency Check", "Workflow Update"]
  },
  {
    name: "Tom",
    status: "review",
    roleAndCompany: "Legal · JusticeLLC",
    goalLinked: false,
    tags: ["Legal", "Compliance"],
    lastInteraction: "1 week ago",
    suggestedActions: ["Legal Review", "Contract Discussion", "Compliance Check"]
  },
];
