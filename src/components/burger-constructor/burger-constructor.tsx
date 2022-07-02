/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import OrderDetails from '../order-details/order-details';
import Ingredient from '../ingredient/ingredient';
import Modal from '../modal/modal';

import styles from './burger-constructor.module.css';
import IngredientsContext from '../../services/ingredients-context';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerConstructor = () => {
  const ingredients = useContext(IngredientsContext);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const buns = ingredients.filter((item) => item.type === 'bun');
  const sauce = ingredients.filter((item) => item.type === 'sauce');
  const main = ingredients.filter((item) => item.type === 'main');

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <section className={styles.burger_constructor}>
      <div className={styles.container}>
        <div className={styles.items}>
          {Ingredient(buns[0], 'top', true)}
          <ul className={styles.list}>
            {sauce.map((item) => Ingredient(item))}
            {main.map((item) => Ingredient(item))}
          </ul>
          {Ingredient(buns[0], 'bottom', true)}
        </div>
        <div className={styles.total}>
          <div className={styles.sum}>
            <span className={styles.total_text}>610</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={toggleModal}>
            Оформить заказ
          </Button>
        </div>
      </div>
      {isModalOpened && (
        <Modal onClose={toggleModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
