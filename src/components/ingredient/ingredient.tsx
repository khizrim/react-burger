import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { removeConstructorIngredients } from '../../services/actions/constructor';

import useAppDispatch from '../../hooks/use-app-dispatch';

import { IngredientDataType } from '../../utils/types';

import styles from './ingredient.module.css';

const Ingredient = ({
  item,
  type,
  isLocked = false
}: {
  item?: IngredientDataType;
  type?: 'top' | 'bottom';
  isLocked?: boolean;
}) => {
  const postfix = type === 'top' ? ' (верх)' : type === 'bottom' ? ' (низ)' : '';

  const dispatch = useAppDispatch();

  const handleRemove = (key: string) => {
    dispatch(removeConstructorIngredients(key));
  };

  return item ? (
    <li className={isLocked ? styles.item_locked : styles.item}>
      {!isLocked && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        text={item.name + postfix}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => handleRemove(item.key)}
        isLocked={isLocked}
      />
    </li>
  ) : (
    <li
      className={
        type === 'top'
          ? styles.item_empty_top
          : type === 'bottom'
          ? styles.item_empty_bottom
          : styles.item_empty
      }
    >
      <span>Перенесите булку</span>
    </li>
  );
};

export default Ingredient;
