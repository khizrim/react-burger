import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import { IngredientType } from '../../utils/types';

const Tabs = ({ tabsList }: { tabsList: IngredientType[] }) => {
  const [currentTab, setCurrentTab] = useState('bun');

  return (
    <>
      {tabsList.map(({ name, type }: IngredientType) => {
        return (
          <Tab key={type} value={type} active={currentTab === type} onClick={setCurrentTab}>
            {name}
          </Tab>
        );
      })}
    </>
  );
};

export default Tabs;
