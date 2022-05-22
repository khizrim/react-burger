/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientCard from '../ingredient-card/ingredient-card';
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

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIngredient(null);
  };

  const openModal = (item: IngredientData) => {
    setIsModalOpen(true);
    setCurrentIngredient({ ...item });
  };

  const renderTabs = (name: string, type: string) => {
    return (
      <Tab key={type} value={type} active={currentTab === type} onClick={setCurrentTab}>
        {name}
      </Tab>
    );
  };

  const renderIngredients = (name: string, type: string, index: number) => {
    return (
      <li key={index} className={styles.type}>
        <h2 className={styles.type_name}>{name}</h2>
        <ul className={styles.list}>
          {data.map(
            (item: IngredientData) =>
              item.type === type && (
                <IngredientCard key={item._id} data={item} openModal={openModal} />
              )
          )}
        </ul>
      </li>
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
            renderIngredients(item.name, item.type, index)
          )}
        </ul>
        {isModalOpen && currentIngredient && (
          <Modal title={'Детали ингредиентов'} onClose={closeModal}>
            <IngredientDetails {...currentIngredient} />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default BurgerIngredients;
