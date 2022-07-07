import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import { IngredientDataType } from '../../utils/types';

import styles from './ingredient.module.css';

const Ingredient = ({
  item,
  type,
  isLocked
}: {
  item: IngredientDataType;
  type?: 'top' | 'bottom';
  isLocked?: boolean;
}) => {
  const postfix = type === 'top' ? ' (верх)' : type === 'bottom' ? ' (низ)' : '';

  return (
    <li className={isLocked ? styles.item_locked : styles.item}>
      {!isLocked && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        text={item.name + postfix}
        price={item.price}
        thumbnail={item.image}
        isLocked={isLocked}
      />
    </li>
  );
};

export default Ingredient;
