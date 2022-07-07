import { forwardRef, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import IngredientCard from '../ingredient-card/ingredient-card';

import IngredientsContext from '../../services/ingredients-context';
import { IngredientDataType, IngredientType } from '../../utils/types';

import styles from './ingredients-list.module.css';

const IngredientsList = forwardRef(
  (
    {
      ingredientsList,
      toggleModal
    }: {
      ingredientsList: IngredientType[];
      toggleModal: (data: IngredientDataType) => void;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any
  ) => {
    const ingredients = useContext(IngredientsContext);
    const { bunRef, sauceRef, mainRef } = ref.current;

    return (
      <>
        {ingredientsList.map(({ name, type }) => {
          return (
            <li
              key={uuidv4()}
              className={styles.type}
              ref={type === 'bun' ? bunRef : type === 'sauce' ? sauceRef : mainRef}
            >
              <h2 className={styles.type_name}>{name}</h2>
              <ul className={styles.list}>
                {ingredients.map(
                  (item: IngredientDataType) =>
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
  }
);

export default IngredientsList;
