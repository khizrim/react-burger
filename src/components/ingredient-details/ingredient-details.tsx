import React from 'react';

import { IngredientData } from '../../utils/types';

import styles from './ingredient-details.module.css';

const IngredientDetails = (data: IngredientData) => {
  return (
    <div className={styles.ingredient_details}>
      <img src={data.image_large} alt={data.name} />
      <div className={styles.content}>
        <h3 className={styles.title}>{data.name}</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.property}>Калории,&thinsp;ккал</p>
            <span>{data.calories}</span>
          </li>
          <li className={styles.item}>
            <p className={styles.property}>Белки,&thinsp;г</p>
            <span>{data.proteins}</span>
          </li>
          <li className={styles.item}>
            <p className={styles.property}>Жиры,&thinsp;г</p>
            <span>{data.fat}</span>
          </li>
          <li className={styles.item}>
            <p className={styles.property}>Углеводы,&thinsp;г</p>
            <span>{data.carbohydrates}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IngredientDetails;
