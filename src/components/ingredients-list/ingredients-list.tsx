import IngredientCard from '../ingredient-card/ingredient-card';

import { IngredientData, IngredientType } from '../../utils/types';

import styles from './ingredients-list.module.css';
import { useContext } from 'react';
import IngredientsContext from '../../services/ingredients-context';

const IngredientsList = ({
  ingredientsList,
  toggleModal
}: {
  ingredientsList: IngredientType[];
  toggleModal: (data: IngredientData) => void;
}) => {
  const ingredients = useContext(IngredientsContext);

  return (
    <>
      {ingredientsList.map(({ name, type }, index) => {
        return (
          <li key={index} className={styles.type}>
            <h2 className={styles.type_name}>{name}</h2>
            <ul className={styles.list}>
              {ingredients.map(
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
};

export default IngredientsList;
