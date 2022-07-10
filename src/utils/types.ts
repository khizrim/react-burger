import { store } from '../services/store';

type IngredientDataType = {
  _id: string;
  name: string;
  type?: string;
  proteins?: number;
  fat?: number;
  carbohydrates?: number;
  calories?: number;
  price: number;
  image: string;
  image_mobile?: string;
  image_large?: string;
  __v?: number;
  key: string;
};

type IngredientType = { name: string; type: string };

type TabsType = {
  currentTab: string;
  handleTabSwitch: (value: string) => void;
};

type OrderType = {
  succes: boolean;
  name: string;
  order: {
    number: number;
  };
};

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { IngredientDataType, IngredientType, TabsType, OrderType, RootState, AppDispatch };
