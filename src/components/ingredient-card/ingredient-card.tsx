import React from 'react';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient-card.module.css';

const IngredientCard = ({ _id, image, price, name }: Card) => {
  return (
    <li key={_id} className={styles.ingredient}>
      <img src={image} alt={name} />
      <div className={styles.price_container}>
        <p className={styles.price}>{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <Counter count={1} size="default" />
    </li>
  );
};

type Card = {
  _id: string;
  image: string;
  price: number;
  name: string;
};

export default IngredientCard;
