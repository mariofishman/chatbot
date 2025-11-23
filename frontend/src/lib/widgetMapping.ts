import AvatarWidget from '@/components/widgets/avatarWidget';
import SmContactWidget from '@/components/widgets/SmContactWidget.tsx';
import MdContactWidget from '@/components/widgets/MdContactWidget.tsx';
import LgContactWidget from '@/components/widgets/LgContactWidget.tsx';

export const widgetMapping = {
  contact: {
    avatar: AvatarWidget,
    small: SmContactWidget,  
    medium: MdContactWidget,
    large: LgContactWidget,
    // extraLarge: ExtraLgContactWidget
  },
  // task: {
  //   small: SmTaskWidget,
  //   medium: MdTaskWidget,
  //   large: LgTaskWidget,
  //   expandedSmall: ExpandedSmTaskWidget,
  //   extraLarge: ExtraLgTaskWidget
  // },
  // goal: {
  //   small: SmGoalWidget,
  //   medium: MdGoalWidget,
  //   large: LgGoalWidget,
  //   expandedSmall: ExpandedSmGoalWidget,
  //   extraLarge: ExtraLgGoalWidget
  // }
};

// Example: getWidgetComponent("show small contact widget") returns {widget: SmContactWidget, objectType: 'contact', size: 'small'}
export function getWidgetComponent(userInput: string) {
  const matchedObject = Object.keys(widgetMapping).find(key =>
    userInput.toLowerCase().includes(key)
  );
  if (!matchedObject) return null;
  const matchedSize = Object.keys((widgetMapping as Record<string, any>)[matchedObject]).find(key =>
    userInput.toLowerCase().includes(key)
  );
  if (!matchedSize) return null;
  return {widget:(widgetMapping as Record<string, any>)[matchedObject][matchedSize],
    objectType: matchedObject,
    size: matchedSize
  };
}

// Example: getNumberFromUserInput("show 3 contact widgets") returns 3
export function getNumberFromUserInput(userInput: string) {
  const numberMatch = userInput.match(/\d+/);
  if (numberMatch) {
    const numberValue = Number(numberMatch[0]);
    if (numberValue) return numberValue;
  }
  return null;
}