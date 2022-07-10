import { IngredientDataType } from '../../utils/types';
import {
  ADD_CONSTRUCTOR_BUN,
  ADD_CONSTRUCTOR_INGREDIENTS,
  MOVE_CONSTRUCTOR_INGREDIENT,
  REMOVE_CONSTRUCTOR_INGREDIENT
} from '../actions/constructor';

const constructorInitialState = {
  ingredients: [],
  bun: null
};

export const constructorReducer = (
  state = constructorInitialState,
  action: {
    type: string;
    ingredient: IngredientDataType;
    bun: IngredientDataType;
    dragIndex: number;
    hoverIndex: number;
    key: string;
  } = {
    type: '',
    ingredient: {} as IngredientDataType,
    bun: {} as IngredientDataType,
    dragIndex: 0,
    hoverIndex: 0,
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

    case MOVE_CONSTRUCTOR_INGREDIENT: {
      const sortedIngredients = [...state.ingredients];
      sortedIngredients.splice(
        action.dragIndex,
        0,
        sortedIngredients.splice(action.hoverIndex, 1)[0]
      );

      return {
        ...state,
        ingredients: sortedIngredients
      };
    }

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
