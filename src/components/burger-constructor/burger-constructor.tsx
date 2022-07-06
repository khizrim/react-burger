/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import OrderDetails from '../order-details/order-details';
import Ingredient from '../ingredient/ingredient';
import Modal from '../modal/modal';
import IngredientsContext from '../../services/ingredients-context';
import OrderContext from '../../services/order-context';
import { IngredientDataType, OrderType } from '../../utils/types';
import { sendOrder } from '../../utils/api';

import styles from './burger-constructor.module.css';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerConstructor = () => {
  const ingredients = useContext(IngredientsContext);
  const [orderData, setOrderData] = useState({} as OrderType);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const data = {
    bun: ingredients.filter((item) => item.type === 'bun'),
    sauce: ingredients.filter((item) => item.type === 'sauce'),
    main: ingredients.filter((item) => item.type === 'main')
  };

  const total = (ingredients as IngredientDataType[]).reduce(
    (acc: number, cur: { price: number }) => acc + cur.price,
    0
  );

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  const handleOrder = () => {
    (async () => {
      try {
        const res = await sendOrder(ingredients);
        console.log(res);
        setOrderData(res);
        toggleModal();
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return (
    <section className={styles.burger_constructor}>
      <div className={styles.container}>
        <div className={styles.items}>
          {Ingredient(data.bun[0], 'top', true)}
          <ul className={styles.list}>
            {data.sauce.map((item) => Ingredient(item))}
            {data.main.map((item) => Ingredient(item))}
          </ul>
          {Ingredient(data.bun[0], 'bottom', true)}
        </div>
        <div className={styles.total}>
          <div className={styles.sum}>
            <span className={styles.total_text}>{total}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={handleOrder}>
            Оформить заказ
          </Button>
        </div>
      </div>
      {isModalOpened && (
        <Modal onClose={toggleModal}>
          <OrderContext.Provider value={orderData}>
            <OrderDetails />
          </OrderContext.Provider>
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
