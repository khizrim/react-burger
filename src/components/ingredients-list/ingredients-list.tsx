import IngredientCard from '../ingredient-card/ingredient-card';

import { IngredientData, IngredientType } from '../../utils/types';

import styles from './ingredients-list.module.css';

const IngredientsList = ({
  ingredientsList,
  data,
  toggleModal
}: {
  ingredientsList: IngredientType[];
  data: IngredientData[];
  toggleModal: (data: IngredientData) => void;
}) => (
  <>
    {ingredientsList.map(({ name, type }, index) => {
      return (
        <li key={index} className={styles.type}>
          <h2 className={styles.type_name}>{name}</h2>
          <ul className={styles.list}>
            {data.map(
              (item: IngredientData) =>
                item.type === type && (
                  <IngredientCard key={item._id} data={item} toggleModal={toggleModal} />
                )
            )}
          </ul>
        </li>
      );
    })}
  </>
);

export default IngredientsList;
