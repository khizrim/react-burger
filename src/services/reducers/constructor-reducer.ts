import { IngredientDataType } from '../../utils/types';
import { ADD_CONSTRUCTOR_BUN, ADD_CONSTRUCTOR_INGREDIENTS } from '../actions/constructor';

const constructorInitialState = {
  ingredients: [],
  bun: null
};

export const constructorReducer = (
  state = constructorInitialState,
  action: { type: string; ingredient: IngredientDataType; bun: IngredientDataType } = {
    type: '',
    ingredient: {} as IngredientDataType,
    bun: {} as IngredientDataType
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

    default:
      return state;
  }
};
