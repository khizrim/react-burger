import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import styles from './app.module.css';
import LoadingSpinner from '../loading-spinner/loading-spinner';

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

  React.useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
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
        {ingredients.length ? (
          <>
            <BurgerIngredients data={ingredients} />
            <BurgerConstructor data={ingredients} />
          </>
        ) : (
          ''
        )}
      </main>
    </div>
  );
}

export default App;
