import { IngredientDataType } from '../../utils/types';

export const ADD_CONSTRUCTOR_INGREDIENTS = 'ADD_CONSTRUCTOR_INGREDIENTS';
export const ADD_CONSTRUCTOR_BUN = 'ADD_CONSTRUCTOR_BUN';

export function addConstructorIngredients(ingredient: IngredientDataType) {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENTS,
    ingredient
  };
}

export function addConstructorBun(bun: IngredientDataType) {
  return {
    type: ADD_CONSTRUCTOR_BUN,
    bun
  };
}
