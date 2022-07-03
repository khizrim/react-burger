import { useContext } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import { IngredientType } from '../../utils/types';
import { INGREDIENT_TYPES } from '../../utils/constants';

import TabsContext from '../../services/tabs-context';

const Tabs = () => {
  const { currentTab, handleTabSwitch } = useContext(TabsContext);

  return (
    <>
      {INGREDIENT_TYPES.map(({ name, type }: IngredientType) => {
        return (
          <Tab key={type} value={type} active={currentTab === type} onClick={handleTabSwitch}>
            {name}
          </Tab>
        );
      })}
    </>
  );
};

export default Tabs;
