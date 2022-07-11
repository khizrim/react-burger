/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';

import IngredientsList from '../ingredients-list/ingredients-list';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Tabs from '../tabs/tabs';
import Modal from '../modal/modal';

import { INGREDIENT_TYPES } from '../../utils/constants';
import { IngredientDataType } from '../../utils/types';
import useAppSelector from '../../hooks/use-app-selector';

import styles from './burger-ingredients.module.css';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerIngredients = () => {
  const { isLoading } = useAppSelector((store) => store.ingredientsReducer);

  const [currentIngredient, setCurrentIngredient] = useState<IngredientDataType | null>(null);
  const [currentTab, setCurrentTab] = useState('bun');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bunRef = useRef<HTMLUListElement>({} as HTMLUListElement);
  const sauceRef = useRef<HTMLUListElement>({} as HTMLUListElement);
  const mainRef = useRef<HTMLUListElement>({} as HTMLUListElement);

  const scrollRef = useRef<HTMLUListElement>({} as HTMLUListElement);

  const tabsRef = useRef({ bunRef, sauceRef, mainRef });

  const toggleModal = (item?: IngredientDataType) => {
    setIsModalOpen(!isModalOpen);
    setCurrentIngredient(item ? { ...item } : null);
  };

  const handleTabSwitch = (value: string) => {
    (value === 'bun' ? bunRef : value === 'sauce' ? sauceRef : mainRef).current.scrollIntoView({
      behavior: 'smooth'
    });
    setCurrentTab(value);
  };

  const handleScrollNav = (e: any) => {
    const scrollTop = e.target.offsetTop;

    setCurrentTab(
      mainRef.current.getBoundingClientRect().y <= scrollTop
        ? 'main'
        : sauceRef.current.getBoundingClientRect().y <= scrollTop
        ? 'sauce'
        : 'bun'
    );
  };

  return (
    <section className={styles.ingredients}>
      <div className={styles.container}>
        {isLoading ? (
          ''
        ) : (
          <>
            <h1 className={styles.title}>Соберите бургер</h1>
            <div className={styles.tabs}>
              <Tabs current={currentTab} onSwitch={handleTabSwitch} />
            </div>
            <ul className={styles.types} ref={scrollRef} onScroll={handleScrollNav}>
              <IngredientsList
                ingredientsList={INGREDIENT_TYPES}
                toggleModal={toggleModal}
                ref={tabsRef}
              />
            </ul>
          </>
        )}
        {isModalOpen && currentIngredient && (
          <Modal title={'Детали ингредиентов'} onClose={toggleModal}>
            <IngredientDetails {...currentIngredient} />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default BurgerIngredients;
