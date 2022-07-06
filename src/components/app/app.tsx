import { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import IngredientsContext from '../../services/ingredients-context';

import { API_URL } from '../../utils/constants';

import styles from './app.module.css';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/ingredients`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(({ data }) => setIngredients(data))
      .catch((err) => setError(String(err)))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {isLoading && <LoadingSpinner />}
      {error && (
        <div className={styles.error}>
          Что-то пошло не так. Ошибка: <span className={styles.error_text}>{error}</span>
        </div>
      )}
      <main className={styles.main}>
        <IngredientsContext.Provider value={ingredients}>
          {ingredients.length ? (
            <>
              <BurgerIngredients />
              <BurgerConstructor />
            </>
          ) : (
            ''
          )}
        </IngredientsContext.Provider>
      </main>
    </div>
  );
}

export default App;
