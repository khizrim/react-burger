import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import useAppSelector from '../../hooks/use-app-selector';

import { IngredientDataType } from '../../utils/types';

import styles from './ingredient-card.module.css';

const IngredientCard = ({
  data,
  toggleModal
}: {
  data: IngredientDataType;
  toggleModal: (data: IngredientDataType) => void;
}) => {
  const [{ isDrag }, drag] = useDrag({
    type: 'ingredients',
    item: data,
    collect: (monitor) => ({
      isDrag: monitor.isDragging()
    })
  });

  const { ingredients, bun }: { ingredients: IngredientDataType[]; bun: IngredientDataType } =
    useAppSelector((store) => store.constructorReducer);

  const ingredientsCount =
    data && data.type === 'bun'
      ? bun && bun._id === data._id
        ? 1
        : 0
      : ingredients.filter((ingredient) => ingredient._id === data._id).length;

  return (
    <li key={data._id} ref={drag} onClick={() => toggleModal(data)} className={styles.ingredient}>
      <img src={data.image} alt={data.name} />
      <div className={styles.price_container}>
        <p className={styles.price}>{data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={styles.name}>{data.name}</h3>
      {ingredientsCount > 0 && <Counter count={ingredientsCount} size="default" />}{' '}
    </li>
  );
};

export default IngredientCard;
