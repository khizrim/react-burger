import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import { data, types } from '../../utils/data';

import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} types={types} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
