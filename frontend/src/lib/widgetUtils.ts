import React from 'react';
import MyWidget from '../MyWidget';
import { mockContacts } from './mockContacts';

export interface WidgetConfig {
  containerDiv: {
    className: string;
    style: React.CSSProperties;
  };
  title: {
    className: string;
    text: string;
  };
  mockData: any[];
  component: React.ComponentType<any>;
  componentProps: (item: any, index: number) => any;
}

export function renderWidget(config: WidgetConfig) {
  return (
    <div className={config.containerDiv.className} style={config.containerDiv.style}>
      <h1 className={config.title.className}>{config.title.text}</h1>
      <div className="grid grid-cols-4 gap-4 max-w-sm">
        {config.mockData.map((item, index) => {
          const Component = config.component;
          const props = config.componentProps(item, index);
          return <Component key={index} {...props} />;
        })}
      </div>
    </div>
  );
}

// Widget Configuration Objects
export const contactWidget: WidgetConfig = {
  containerDiv: {
    className: "p-8 min-h-screen",
    style: { backgroundColor: 'oklch(0.929 0.013 255.508)' }
  },
  title: {
    className: "text-white text-2xl mb-6 font-bold",
    text: "Contact Widget Grid"
  },
  mockData: mockContacts,
  component: MyWidget,
  componentProps: (contact, index) => ({
    name: contact.name,
    status: contact.status,
    roleAndCompany: contact.roleAndCompany,
    profileImageUrl: contact.profileImageUrl,
    goalLinked: contact.goalLinked
  })
};

// Add more widget configurations here as needed
// Example:
// export const anotherWidget: WidgetConfig = {
//   containerDiv: {
//     className: "p-4 min-h-screen",
//     style: { backgroundColor: '#ffffff' }
//   },
//   title: {
//     className: "text-black text-xl mb-4 font-semibold",
//     text: "Another Widget"
//   },
//   mockData: someOtherData,
//   component: SomeOtherComponent,
//   componentProps: (item, index) => ({
//     // props mapping
//   })
// };
