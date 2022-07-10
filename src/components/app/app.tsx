import { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import LoadingSpinner from '../loading-spinner/loading-spinner';

import { getIngredients } from '../../services/actions/ingredients';

import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';

import styles from './app.module.css';

function App() {
  const { isLoading, error } = useAppSelector((store) => store.ingredientsReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      {isLoading && <LoadingSpinner />}
      {error ? (
        <div className={styles.error}>
          Что-то пошло не так. Ошибка: <span className={styles.error_text}>{error}</span>
        </div>
      ) : (
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
    </div>
  );
}

export default App;
