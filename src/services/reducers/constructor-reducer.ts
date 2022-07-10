import { IngredientDataType } from '../../utils/types';
import {
  ADD_CONSTRUCTOR_BUN,
  ADD_CONSTRUCTOR_INGREDIENTS,
  REMOVE_CONSTRUCTOR_INGREDIENT
} from '../actions/constructor';

const constructorInitialState = {
  ingredients: [],
  bun: null
};

export const constructorReducer = (
  state = constructorInitialState,
  action: { type: string; ingredient: IngredientDataType; bun: IngredientDataType; key: string } = {
    type: '',
    ingredient: {} as IngredientDataType,
    bun: {} as IngredientDataType,
    key: ''
  }
) => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient]
      };

    case ADD_CONSTRUCTOR_BUN:
      return {
        ...state,
        bun: action.bun
      };

    case REMOVE_CONSTRUCTOR_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (item: IngredientDataType) => item.key !== action.key
        )
      };

    default:
      return state;
  }
};
