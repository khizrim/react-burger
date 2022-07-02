/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import IngredientsList from '../ingredients-list/ingredients-list';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

import { INGREDIENT_TYPES } from '../../utils/constants';
import { IngredientData } from '../../utils/types';

import Tabs from '../tabs/tabs';

import styles from './burger-ingredients.module.css';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerIngredients = () => {
  const [currentIngredient, setCurrentIngredient] = useState<IngredientData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (item?: IngredientData) => {
    setIsModalOpen(!isModalOpen);
    setCurrentIngredient(item ? { ...item } : null);
  };

  return (
    <section className={styles.ingredients}>
      <div className={styles.container}>
        <h1 className={styles.title}>Соберите бургер</h1>
        <div className={styles.tabs}>
          <Tabs tabsList={INGREDIENT_TYPES} />
        </div>
        <ul className={styles.types}>
          <IngredientsList ingredientsList={INGREDIENT_TYPES} toggleModal={toggleModal} />
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
