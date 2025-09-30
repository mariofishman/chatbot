import React from 'react';
import smContactWidget from '../components/widgets/smContactWidget';
import mdContactWidget from '../components/widgets/mdContactWidget';
import { mockContacts } from './mockContacts';

export interface WidgetConfig {
  containerDiv: {
    className: string;
    style: React.CSSProperties;
  };
  layout: "small" | "medium" | "large";
  mockData: any[];
  component: React.ComponentType<any>;
  componentProps: (item: any, index: number) => any;
  maxItems?: number;
}

export function renderWidget(config: WidgetConfig) {
  const maxItems = config.maxItems || (config.layout === "small" ? config.mockData.length : 1);
  const itemsToRender = config.mockData.slice(0, maxItems);

  if (config.layout === "small") {
    return (
      <div className={config.containerDiv.className} style={config.containerDiv.style}>
        <div className="grid grid-cols-4 gap-4">
          {itemsToRender.map((item, index) => {
            const Component = config.component;
            const props = config.componentProps(item, index);
            return <Component key={index} {...props} />;
          })}
        </div>
      </div>
    );
  }

  // Medium and Large layouts: full-width single widget
  return (
    <div className={config.containerDiv.className} style={config.containerDiv.style}>
      <div className="w-full">
        {itemsToRender.map((item, index) => {
          const Component = config.component;
          const props = config.componentProps(item, index);
          return <Component key={index} {...props} />;
        })}
      </div>
    </div>
  );
}

// Widget Configuration Objects
export const smContactWidgetConfig: WidgetConfig = {
  containerDiv: {
    className: "p-8",
    style: { backgroundColor: 'oklch(0.929 0.013 255.508)' }
  },
  layout: "small",
  mockData: mockContacts,
  component: smContactWidget,
  componentProps: (contact) => ({
    name: contact.name,
    status: contact.status,
    roleAndCompany: contact.roleAndCompany,
    profileImageUrl: contact.profileImageUrl,
    goalLinked: contact.goalLinked
  })
};

export const mdContactWidgetConfig: WidgetConfig = {
  containerDiv: {
    className: "p-8",
    style: { backgroundColor: 'oklch(0.929 0.013 255.508)' }
  },
  layout: "medium",
  mockData: mockContacts,
  component: mdContactWidget,
  componentProps: (contact) => ({
    name: contact.name,
    status: contact.status,
    roleAndCompany: contact.roleAndCompany,
    profileImageUrl: contact.profileImageUrl,
    goalLinked: contact.goalLinked,
    tags: ["Professional", "Follow-up"],
    lastInteraction: "2 days ago",
    suggestedActions: ["Set Reminder", "Add Note", "Update Status"]
  }),
  maxItems: 1
};

// Add more widget configurations here as needed
// 
// Example for a large contact widget:
// export const lgContactWidgetConfig: WidgetConfig = {
//   containerDiv: {
//     className: "p-4 min-h-screen",
//     style: { backgroundColor: '#ffffff' }
//   },
//   layout: "large",
//   mockData: mockContacts,
//   component: lgContactWidget, // Import from '../components/widgets/lgContactWidget'
//   componentProps: (contact) => ({
//     name: contact.name,
//     status: contact.status,
//     roleAndCompany: contact.roleAndCompany,
//     profileImageUrl: contact.profileImageUrl,
//     goalLinked: contact.goalLinked,
//     // Add large-specific props here
//     detailedInfo: contact.detailedInfo,
//     notes: contact.notes
//   }),
//   maxItems: 1
// };
