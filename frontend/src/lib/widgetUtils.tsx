import React from 'react';
import SmContactWidget from '../components/widgets/smContactWidget';
import MdContactWidget from '../components/widgets/mdContactWidget';
import { mockContacts } from './mockContacts';
import type { Message } from '@/types/message';

// Legacy WidgetConfig interface for preview mode (main.tsx)
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

// Legacy renderWidget function for preview mode (main.tsx)
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

// Legacy Widget Configuration Objects for preview mode (main.tsx)
export const smContactWidgetConfig: WidgetConfig = {
  containerDiv: {
    className: "p-8",
    style: { backgroundColor: 'oklch(0.929 0.013 255.508)' }
  },
  layout: "small",
  mockData: mockContacts,
  component: SmContactWidget,
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
  component: MdContactWidget,
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


// Widget mapping function for new SSE architecture
export function renderWidgetFromMessage(message: Message): React.ReactElement | null {
  // Get the first widget from the widgets array
  const widget = message.widgets && message.widgets.length > 0 ? message.widgets[0] : null;
  if (!widget) return null;
  
  const { objectType, size, data } = widget;
  
  if (!objectType || !size || !data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  // Map objectType + size to widget component
  const widgetKey = `${objectType}${size.charAt(0).toUpperCase() + size.slice(1)}`;
  
  // Render widgets based on size layout
  if (size === "small") {
    // Small widgets: 4-column grid
    return (
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) => {
          switch (widgetKey) {
            case 'contactSmall':
              return <SmContactWidget key={index} {...item} />;
            case 'taskSmall':
              return <div key={index}>Task widgets not implemented yet</div>;
            case 'goalSmall':
              return <div key={index}>Goal widgets not implemented yet</div>;
            default:
              return <div key={index}>Unknown widget type</div>;
          }
        })}
      </div>
    );
  } else {
    // Medium, Large, etc.: stacked vertically
    return (
      <div className="space-y-4">
        {data.map((item, index) => {
          switch (widgetKey) {
            case 'contactMedium':
              return <MdContactWidget key={index} {...item} />;
            case 'contactLarge':
              return <div key={index}>Large contact widget not implemented yet</div>;
            case 'contactExpandedSmall':
              return <div key={index}>Expanded small contact widget not implemented yet</div>;
            case 'contactExtraLarge':
              return <div key={index}>Extra large contact widget not implemented yet</div>;
            default:
              return <div key={index}>Unknown widget type</div>;
          }
        })}
      </div>
    );
  }
}
