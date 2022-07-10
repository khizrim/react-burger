import { IngredientDataType } from '../../utils/types';

export const ADD_CONSTRUCTOR_INGREDIENTS = 'ADD_CONSTRUCTOR_INGREDIENTS';
export const ADD_CONSTRUCTOR_BUN = 'ADD_CONSTRUCTOR_BUN';
export const REMOVE_CONSTRUCTOR_INGREDIENT = 'REMOVE_CONSTRUCTOR_INGREDIENT';

export function addConstructorIngredients(ingredient: IngredientDataType, key: string) {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENTS,
    ingredient: { ...ingredient, key }
  };
}

export function addConstructorBun(bun: IngredientDataType, key: string) {
  return {
    type: ADD_CONSTRUCTOR_BUN,
    bun: { ...bun, key }
  };
}

export function removeConstructorIngredients(key: string) {
  return {
    type: REMOVE_CONSTRUCTOR_INGREDIENT,
    key
  };
}
