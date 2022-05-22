/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientCard from '../ingredient-card/ingredient-card';
import { IngredientData, IngredientType } from '../../utils/types';

import styles from './burger-ingredients.module.css';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerIngredients = ({ data }: { data: IngredientData[] }) => {
  const [current, setCurrent] = React.useState('bun');

  const types = [
    {
      name: 'Булки',
      type: 'bun'
    },
    {
      name: 'Соусы',
      type: 'sauce'
    },
    {
      name: 'Начинки',
      type: 'main'
    }
  ];

  const renderTabs = (name: string, type: string) => {
    return (
      <Tab key={type} value={type} active={current === type} onClick={setCurrent}>
        {name}
      </Tab>
    );
  };

  const renderIngredients = (name: string, type: string, index: number) => {
    return (
      <li key={index} className={styles.type}>
        <h2 className={styles.type_name}>{name}</h2>
        <ul className={styles.list}>
          {data.map(
            (item: IngredientData) =>
              item.type === type && <IngredientCard key={item._id} {...item} />
          )}
        </ul>
      </li>
    );
  };

  return (
    <section className={styles.ingredients}>
      <div className={styles.container}>
        <h1 className={styles.title}>Соберите бургер</h1>
        <div className={styles.tabs}>
          {types.map((item: IngredientType) => renderTabs(item.name, item.type))}
        </div>
        <ul className={styles.types}>
          {types.map((item: IngredientType, index) =>
            renderIngredients(item.name, item.type, index)
          )}
        </ul>
      </div>
    </section>
  );
};

export default BurgerIngredients;
