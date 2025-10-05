import SmContactWidget from '@/components/widgets/smContactWidget';
import MdContactWidget from '@/components/widgets/mdContactWidget';

export const widgetMapping = {
  contact: {
    small: SmContactWidget,
    medium: MdContactWidget,
    // large: LgContactWidget,
    // expandedSmall: ExpandedSmContactWidget,
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

export function getNumberFromUserInput(userInput: string) {
  const numberMatch = userInput.match(/\d+/);
  if (numberMatch) {
    const numberValue = Number(numberMatch[0]);
    if (numberValue) return numberValue;
  }
  return null;
}