import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import { IngredientType } from '../../utils/types';
import { INGREDIENT_TYPES } from '../../utils/constants';

const Tabs = ({ current, onSwitch }: { current: string; onSwitch: (value: string) => void }) => {
  return (
    <>
      {INGREDIENT_TYPES.map(({ name, type }: IngredientType) => {
        return (
          <Tab key={type} value={type} active={current === type} onClick={onSwitch}>
            {name}
          </Tab>
        );
      })}
    </>
  );
};

export default Tabs;
