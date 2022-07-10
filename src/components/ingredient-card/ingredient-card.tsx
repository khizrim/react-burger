import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';

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

  return (
    <li key={data._id} ref={drag} onClick={() => toggleModal(data)} className={styles.ingredient}>
      <img src={data.image} alt={data.name} />
      <div className={styles.price_container}>
        <p className={styles.price}>{data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={styles.name}>{data.name}</h3>
      <Counter count={1} size="default" />
    </li>
  );
};

export default IngredientCard;
