import type { Contact } from "@/types/contact";

export const mockContacts: Contact[] = [
  {
    name: "Ashwin",
    status: "active",
    roleAndCompany: "Buyer · Fishmart",
    profileImageUrl: "/src/assets/facePics/1516818428248.jpeg",
    goalLinked: true,
    suggestedActions: ["Set Reminder", "Add Note", "Update Status"],
    linkedGoals: [
      { id: "1", title: "Expand supplier network" },
      { id: "2", title: "Negotiate new terms" }
    ],
    generalInfo:
       `Met Ashwin at the regional fisheries expo to discuss sustainable sourcing for Fishmart. Connected with Jordan regarding infrastructure uptime and performance improvements. Connected with Jordan regarding infrastructure uptime and performance improvements.
      Connected with Jordan regarding infrastructure uptime and performance improvements.
      Connected with Jordan regarding infrastructure uptime and performance improvements. Connected with Jordan regarding infrastructure uptime and performance improvements. Connected with Jordan regarding infrastructure uptime and performance improvements.
      Connected with Jordan regarding infrastructure uptime and performance improvements.`,
    tasks: [
      { date: "Oct-15", description: "Video call to review supplier pricing structure. Video call to review supplier pricing structure. Video call to review supplier pricing structure. Video call to review supplier pricing structure. Video call to review supplier pricing structure.", taskStatus: "done" },
      { date: "Oct-10", description: "Shared sustainability compliance documentation.", taskStatus: "done" },
      { date: "Oct-03", description: "Initial discussion on seafood import process.", taskStatus: "not due" }, // changed
      { date: "Oct-18", description: "Had a follow-up call to align on supplier evaluation metrics and logistics optimization.", taskStatus: "to do" }
    ]
  },
  {
    name: "Jordan",
    status: "draft",
    roleAndCompany: "Manager · TechCorp",
    profileImageUrl: "/src/assets/facePics/1718187560092.jpeg",
    goalLinked: false,
    suggestedActions: ["Schedule Meeting", "Send Proposal", "Follow-up"],
    linkedGoals: [{ id: "3", title: "Improve infrastructure uptime" }],
    generalInfo:
      `Connected with Jordan regarding infrastructure uptime and performance improvements. `,
    tasks: []
  },
  {
    name: "Kaya",
    status: "review",
    roleAndCompany: "Designer · Studio",
    profileImageUrl: "/src/assets/facePics/1728877732930.jpeg",
    goalLinked: true,
    suggestedActions: ["Review Portfolio", "Discuss Project", "Send Samples"],
    linkedGoals: [{ id: "4", title: "Redesign client brand kit" }],
    generalInfo:
      "",
    tasks: [
      { date: "Oct-17", description: "Shared client feedback summary.", taskStatus: "done" },
      { date: "Oct-11", description: "Met to finalize concept sketches.", taskStatus: "done" },
      { date: "Oct-05", description: "Reviewed portfolio updates and color direction.", taskStatus: "not due" }, // changed
      { date: "Oct-18", description: "Discussed feedback on current brand redesign and potential project extension.", taskStatus: "to do" }
    ]
  },
  {
    name: "Cameron",
    status: "inactive",
    roleAndCompany: "Developer · CodeLab",
    profileImageUrl: "/src/assets/facePics/1735343022993.jpeg",
    goalLinked: false,
    suggestedActions: ["Reconnect", "Check Status", "Update Contact"],
    linkedGoals: [{ id: "5", title: "Refactor legacy module" }],
    generalInfo:
      "Collaborated with Cameron during a software modernization project two years ago. We worked jointly on migrating a legacy platform to a modern software stack, focusing on improving performance and updating outdated infrastructure. Cameron was instrumental in leading the technical workshops, guiding the development team through several architectural challenges, and coordinating project stakeholders to align timelines and goals for a seamless transition.",
    tasks: [
      { date: "Feb-14-2022", description: "Finalized documentation for archived project.", taskStatus: "done" },
      { date: "Dec-03-2021", description: "Performed final code handover session.", taskStatus: "not due" }, // changed
      { date: "Aug-21-2021", description: "Initial meeting to discuss sunset timeline.", taskStatus: "not due" },
      { date: "Feb-14-2022", description: "Last contact was an email exchange about project decommissioning.", taskStatus: "overdue" },
      { date: "Jan-10-2022", description: "Resolved lingering bug tickets before project closure.", taskStatus: "done" },
      { date: "Nov-18-2021", description: "Shared transition plan with new development team.", taskStatus: "done" },
      { date: "Sep-07-2021", description: "Documented technical debt for legacy system handoff.", taskStatus: "to do" },
      { date: "Oct-15-2021", description: "Notified stakeholders of upgrade pause.", taskStatus: "done" }
    ]
  },
  {
    name: "Aysha",
    status: "active",
    roleAndCompany: "Analyst · DataCo",
    profileImageUrl: "/src/assets/facePics/1756917437642.jpeg",
    goalLinked: true,
    suggestedActions: ["Request Report", "Schedule Analysis", "Share Insights"],
    linkedGoals: [{ id: "6", title: "Automate reporting pipeline" }],
    generalInfo:
      "Met Aysha at a data summit discussing predictive analytics and pipeline automation.",
    tasks: [
      { date: "Oct-18", description: "Shared feedback on new data pipeline automation.", taskStatus: "not due" }, // changed
      { date: "Oct-13", description: "Joint session to review data modeling assumptions.", taskStatus: "done" },
      { date: "Oct-09", description: "Initial meeting to align on analytics goals.", taskStatus: "done" },
      { date: "Oct-06", description: "Reviewed draft of automated KPI dashboard and discussed next iteration.", taskStatus: "to do" }
    ]
  },
  {
    name: "Zahir",
    status: "review",
    roleAndCompany: "Consultant · ProAdvice",
    profileImageUrl: "/src/assets/facePics/1758534884497.jpeg",
    goalLinked: false,
    suggestedActions: ["Book Consultation", "Request Quote", "Discuss Strategy"],
    linkedGoals: [{ id: "7", title: "Optimize advisory workflow" }],
    generalInfo:
      "Engaged Zahir for process optimization consultation for enterprise clients.",
    tasks: [
      { date: "Oct-16", description: "Shared updated process documentation.", taskStatus: "done" },
      { date: "Oct-10", description: "Reviewed proposed KPI metrics for consulting efficiency.", taskStatus: "done" },
      { date: "Oct-04", description: "Initial strategy alignment call.", taskStatus: "done" },
      { date: "Oct-17", description: "Held review meeting to assess early results from advisory workflow improvements.", taskStatus: "to do" }
    ]
  },
  {
    name: "Emma Mamme",
    status: "active",
    roleAndCompany: "Marketing · BrandCo Company big Name for a company",
    goalLinked: true,
    suggestedActions: ["Campaign Review", "Brand Discussion", "Marketing Plan"],
    linkedGoals: [{ id: "8", title: "Launch Q4 brand campaign" }],
    generalInfo:
      "Connected with Emma during a brand strategy session focused on Q4 campaigns. Connected with Emma during a brand strategy session focused on Q4 campaigns.",
    tasks: [
      { date: "Oct-17", description: "Shared campaign draft visuals for feedback.", taskStatus: "done" },
      { date: "Oct-12", description: "Marketing sync meeting on campaign KPIs.", taskStatus: "done" },
      { date: "Oct-06", description: "Kickoff call for Q4 campaign planning.", taskStatus: "done" },
      { date: "Oct-18", description: "Reviewed upcoming ad placements and finalized influencer partnerships.", taskStatus: "to do" }
    ]
  },
  {
    name: "Mike",
    status: "draft",
    roleAndCompany: "Sales · RevenueInc",
    goalLinked: false,
    suggestedActions: ["Sales Call", "Demo Request", "Proposal Review"],
    linkedGoals: [{ id: "9", title: "Increase conversion by 15%" }],
    generalInfo:
      "Contacted Mike about new sales initiatives and conversion targets.",
    tasks: []
  },
  {
    name: "Sarah",
    status: "review",
    roleAndCompany: "HR · PeopleFirst",
    goalLinked: true,
    suggestedActions: ["HR Meeting", "Policy Review", "Team Discussion"],
    linkedGoals: [{ id: "10", title: "Enhance team retention" }],
    generalInfo:
      "Connected with Sarah during an HR roundtable on employee engagement strategies.",
    tasks: [
      { date: "Oct-14", description: "Follow-up call on HR engagement initiatives.", taskStatus: "done" },
      { date: "Oct-09", description: "Shared updated policy draft for review.", taskStatus: "done" },
      { date: "Oct-02", description: "Initial HR meeting to discuss retention goals.", taskStatus: "done" },
      { date: "Oct-15", description: "Discussed retention analytics and improvements to the feedback cycle.", taskStatus: "to do" }
    ]
  },
  {
    name: "David",
    status: "inactive",
    roleAndCompany: "Finance · MoneyCorp",
    goalLinked: false,
    suggestedActions: ["Financial Review", "Budget Discussion", "Reconnect"],
    linkedGoals: [{ id: "11", title: "Streamline quarterly reporting" }],
    generalInfo:
      "Collaborated with David on a finance automation initiative several years ago.",
    tasks: [
      { date: "Jan-12-2021", description: "Final budget presentation for legacy project.", taskStatus: "not due" }, // changed
      { date: "Sep-28-2020", description: "Discussed Q3 expense consolidation.", taskStatus: "done" },
      { date: "Jun-03-2020", description: "Introduced automation proposal for reporting.", taskStatus: "done" },
      { date: "Jan-13-2021", description: "Last spoke during the transition phase of financial reporting restructuring.", taskStatus: "not due" }
    ]
  },
  {
    name: "Lisa",
    status: "active",
    roleAndCompany: "Operations · FlowTech",
    goalLinked: true,
    suggestedActions: ["Process Review", "Efficiency Check", "Workflow Update"],
    linkedGoals: [{ id: "12", title: "Improve workflow automation" }],
    generalInfo:
      "Met Lisa at an operations leadership meetup discussing workflow efficiency.",
    tasks: [
      { date: "Oct-18", description: "Workshop on process tracking improvements.", taskStatus: "done" },
      { date: "Oct-12", description: "Reviewed new automation metrics dashboard.", taskStatus: "done" },
      { date: "Oct-07", description: "Operations sync meeting on workflow redesign.", taskStatus: "done" },
      { date: "Oct-19", description: "Shared updates on process automation rollout and received optimization feedback.", taskStatus: "to do" }
    ]
  },
  {
    name: "Tom Perez",
    status: "review",
    roleAndCompany: "Legal · JusticeLLC",
    goalLinked: false,
    suggestedActions: ["Legal Review", "Contract Discussion", "Compliance Check"],
    linkedGoals: [{ id: "13", title: "Revise standard contracts" }],
    generalInfo:
      "Worked with Tom during a compliance update project for contract revisions.",
    tasks: [
      { date: "Oct-13", description: "Reviewed updated compliance clauses.", taskStatus: "done" },
      { date: "Oct-08", description: "Legal consultation on new policy rollout.", taskStatus: "done" },
      { date: "Oct-01", description: "Initial discussion about legal process updates.", taskStatus: "done" },
      { date: "Oct-14", description: "Reviewed updates to legal documentation and discussed next review cycle.", taskStatus: "to do" }
    ]
  },
  {
    name: "Diana M. Carhuachanco",
    status: "review",
    roleAndCompany: "Aero-Space Engineer · NASA",
    goalLinked: true,
    suggestedActions: ["Legal Review", "Contract Discussion", "Compliance Check"],
    linkedGoals: [{ id: "13", title: "Revise standard contracts" }],
    generalInfo:
      "Met Diana during a space engineering conference discussing satellite design and deployment.",
    tasks: [
      { date: "Oct-13", description: "Shared satellite design specifications.", taskStatus: "done" },
      { date: "Oct-08", description: "Met to discuss space mission planning.", taskStatus: "done" },
      { date: "Oct-01", description: "Initial meeting to discuss satellite design and deployment.", taskStatus: "done" },
      { date: "Oct-14", description: "Discussed potential satellite launch opportunities and collaboration on space mission planning.", taskStatus: "to do" }
    ]
  }
];
