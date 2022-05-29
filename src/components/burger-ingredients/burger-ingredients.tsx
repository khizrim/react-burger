/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientsList from '../ingredients-list/ingredients-list';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

import { INGREDIENT_TYPES } from '../../utils/constants';
import { IngredientData, IngredientType } from '../../utils/types';

import styles from './burger-ingredients.module.css';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerIngredients = ({ data }: { data: IngredientData[] }) => {
  const [currentTab, setCurrentTab] = useState('bun');
  const [currentIngredient, setCurrentIngredient] = useState<IngredientData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (item?: IngredientData) => {
    setIsModalOpen(!isModalOpen);
    setCurrentIngredient(item ? { ...item } : null);
  };

  const renderTabs = (name: string, type: string) => {
    return (
      <Tab key={type} value={type} active={currentTab === type} onClick={setCurrentTab}>
        {name}
      </Tab>
    );
  };

  return (
    <section className={styles.ingredients}>
      <div className={styles.container}>
        <h1 className={styles.title}>Соберите бургер</h1>
        <div className={styles.tabs}>
          {INGREDIENT_TYPES.map((item: IngredientType) => renderTabs(item.name, item.type))}
        </div>
        <ul className={styles.types}>
          {INGREDIENT_TYPES.map((item: IngredientType, index) =>
            IngredientsList(data, item.name, item.type, index, toggleModal)
          )}
        </ul>
        {isModalOpen && currentIngredient && (
          <Modal title={'Детали ингредиентов'} onClose={toggleModal}>
            <IngredientDetails {...currentIngredient} />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default BurgerIngredients;
