/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid';
import { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import OrderDetails from '../order-details/order-details';
import Ingredient from '../ingredient/ingredient';
import Modal from '../modal/modal';

import { IngredientDataType } from '../../utils/types';

import { postOrder } from '../../services/actions/order';

import {
  addConstructorBun,
  addConstructorIngredients,
  moveConstructorIngredient
} from '../../services/actions/constructor';

import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';

import styles from './burger-constructor.module.css';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerConstructor = () => {
  const dispatch = useAppDispatch();

  const { ingredients, bun }: { ingredients: IngredientDataType[]; bun: IngredientDataType } =
    useAppSelector((store) => store.constructorReducer);

  const [isModalOpened, setIsModalOpened] = useState(false);

  const total = (ingredients as IngredientDataType[]).reduce(
    (acc: number, cur: { price: number }) => acc + cur.price,
    (bun && bun.price * 2) || 0
  );

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  const handleOrder = () => {
    dispatch(postOrder([bun, ...ingredients]));
    toggleModal();
  };

  const handleMove = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(moveConstructorIngredient(dragIndex, hoverIndex));
    },
    [dispatch]
  );

  const onDrop = (item: IngredientDataType) => {
    if (item.type === 'bun') {
      dispatch(addConstructorBun(item, uuidv4()));
    } else {
      dispatch(addConstructorIngredients(item, uuidv4()));
    }
  };

  const [{ isOver }, drop] = useDrop({
    accept: 'ingredients',
    drop: (item: IngredientDataType) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <section className={styles.burger_constructor}>
      <div className={styles.container}>
        <div className={styles.items} ref={drop}>
          <Ingredient
            item={bun}
            type="top"
            key={`${bun && bun.key}_top`}
            isLocked
            index={0}
            onMove={handleMove}
          />
          <ul
            className={
              ingredients.length ? styles.list : isOver ? styles.list_active : styles.list_empty
            }
          >
            {ingredients.length ? (
              ingredients.map((ingredient, index) => (
                <Ingredient
                  id={ingredient._id}
                  item={ingredient}
                  index={index}
                  key={ingredient.key}
                  onMove={handleMove}
                />
              ))
            ) : (
              <span>Перенесите соус или начинку</span>
            )}
          </ul>
          <Ingredient
            item={bun}
            type="bottom"
            key={`${bun && bun.key}_bottom`}
            isLocked
            index={0}
            onMove={handleMove}
          />
        </div>
        <div className={styles.total}>
          <div className={styles.sum}>
            <span className={styles.total_text}>{total}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            type="primary"
            size="large"
            onClick={handleOrder}
            disabled={!bun || !ingredients.length}
          >
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
