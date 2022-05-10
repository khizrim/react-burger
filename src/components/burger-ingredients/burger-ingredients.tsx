import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientCard from '../ingredient-card/ingredient-card';

import styles from './burger-ingredients.module.css';

const BurgerIngredients = ({ data, types }: { data: IngredientData[]; types: IngredietType[] }) => {
  const [current, setCurrent] = React.useState('bun');

  const renderTabs = (name: string, type: string) => {
    return (
      <Tab value={type} active={current === type} onClick={setCurrent}>
        {name}
      </Tab>
    );
  };

  const renderIngredients = (name: string, type: string) => {
    return (
      <li className={styles.type}>
        <h2 className={styles.type_name}>{name}</h2>
        <ul className={styles.list}>
          {data.map((item: IngredientData) => item.type === type && <IngredientCard {...item} />)}
        </ul>
      </li>
    );
  };

  return (
    <section className={styles.ingredients}>
      <div className={styles.container}>
        <h1 className={styles.title}>Соберите бургер</h1>
        <div className={styles.tabs}>
          {types.map((item: IngredietType) => renderTabs(item.name, item.type))}
        </div>
        <ul className={styles.types}>
          {types.map((item: IngredietType) => renderIngredients(item.name, item.type))}
        </ul>
      </div>
    </section>
  );
};

type IngredientData = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v?: number;
};

type IngredietType = { name: string; type: string };

export default BurgerIngredients;
