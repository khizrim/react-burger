/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import {
  DragIcon,
  ConstructorElement,
  Button,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';

import { IngredientData } from '../../utils/types';

import styles from './burger-constructor.module.css';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerConstructor = ({ data }: { data: IngredientData[] }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const buns = data.filter((item) => item.type === 'bun');
  const sauce = data.filter((item) => item.type === 'sauce');
  const main = data.filter((item) => item.type === 'main');

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  const ingredient = (item: IngredientData, type?: 'top' | 'bottom') =>
    type ? (
      <div className={styles.item_locked}>
        <ConstructorElement
          type={type}
          text={`${item.name} ${type === 'top' ? '(верх)' : '(низ)'}`}
          price={item.price}
          thumbnail={item.image}
          isLocked
        />
      </div>
    ) : (
      <li className={styles.item} key={item._id}>
        <DragIcon type="primary" />
        <ConstructorElement
          type={type}
          text={item.name}
          price={item.price}
          thumbnail={item.image}
        />
      </li>
    );

  return (
    <section className={styles.burger_constructor}>
      <div className={styles.container}>
        <div className={styles.items}>
          {ingredient(buns[0], 'top')}
          <ul className={styles.list}>
            {sauce.map((item) => ingredient(item))}
            {main.map((item) => ingredient(item))}
          </ul>
          {ingredient(buns[0], 'bottom')}
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
