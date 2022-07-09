import { IngredientDataType } from '../../utils/types';

export const ADD_CONSTRUCTOR_INGREDIENTS = 'ADD_CONSTRUCTOR_INGREDIENTS';
export const ADD_CONSTRUCTOR_BUN = 'ADD_CONSTRUCTOR_BUN';

export function addConstructorIngredients(ingredients: IngredientDataType[]) {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENTS,
    ingredients
  };
}

export function addConstructorBun(bun: IngredientDataType) {
  return {
    type: ADD_CONSTRUCTOR_BUN,
    ingredient: bun
  };
}
