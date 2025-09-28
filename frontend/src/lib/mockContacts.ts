export interface Contact {
  name: string;
  status: "draft" | "active" | "review" | "inactive";
  roleAndCompany?: string;
  profileImageUrl?: string;
  goalLinked?: boolean;
}

export const mockContacts: Contact[] = [
  {
    name: "Ashwin",
    status: "active",
    roleAndCompany: "Buyer · Fishmart",
    profileImageUrl: "/src/assets/facePics/1516818428248.jpeg",
    goalLinked: true,
  },
  {
    name: "Jordan",
    status: "draft",
    roleAndCompany: "Manager · TechCorp",
    profileImageUrl: "/src/assets/facePics/1718187560092.jpeg",
    goalLinked: false,
  },
  {
    name: "Kaya",
    status: "review",
    roleAndCompany: "Designer · Studio",
    profileImageUrl: "/src/assets/facePics/1728877732930.jpeg",
    goalLinked: true,
  },
  {
    name: "Cameron",
    status: "inactive",
    roleAndCompany: "Developer · CodeLab",
    profileImageUrl: "/src/assets/facePics/1735343022993.jpeg",
    goalLinked: false,
  },
  {
    name: "Aysha",
    status: "active",
    roleAndCompany: "Analyst · DataCo",
    profileImageUrl: "/src/assets/facePics/1756917437642.jpeg",
    goalLinked: true,
  },
  {
    name: "Zahir",
    status: "review",
    roleAndCompany: "Consultant · ProAdvice",
    profileImageUrl: "/src/assets/facePics/1758534884497.jpeg",
    goalLinked: false,
  },
  {
    name: "Emma",
    status: "active",
    roleAndCompany: "Marketing · BrandCo",
    goalLinked: true,
  },
  {
    name: "Mike",
    status: "draft",
    roleAndCompany: "Sales · RevenueInc",
    goalLinked: false,
  },
  {
    name: "Sarah",
    status: "review",
    roleAndCompany: "HR · PeopleFirst",
    goalLinked: true,
  },
  {
    name: "David",
    status: "inactive",
    roleAndCompany: "Finance · MoneyCorp",
    goalLinked: false,
  },
  {
    name: "Lisa",
    status: "active",
    roleAndCompany: "Operations · FlowTech",
    goalLinked: true,
  },
  {
    name: "Tom",
    status: "review",
    roleAndCompany: "Legal · JusticeLLC",
    goalLinked: false,
  },
];
