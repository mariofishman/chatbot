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
