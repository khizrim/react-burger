import {
  GET_INGREDIENT_REQUEST,
  GET_INGREDIENT_SUCCESS,
  GET_INGREDIENT_FAILED
} from '../actions/ingredients';

const ingredientsInitialState = {
  ingredients: [],
  ingredient: null,
  ingredientsRequest: false,
  ingredientsFailed: false,

  isLoading: false,
  error: ''
};

export const ingredientsReducer = (
  state = ingredientsInitialState,
  action: { type: string; ingredients: []; error: string } = {
    type: '',
    ingredients: [],
    error: ''
  }
) => {
  switch (action.type) {
    case GET_INGREDIENT_REQUEST:
      return {
        ...state,
        ingredientsRequest: true,
        isLoading: true
      };

    case GET_INGREDIENT_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsFailed: false,
        ingredientsRequest: false,
        isLoading: false
      };
    }

    case GET_INGREDIENT_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
        isLoading: false,
        error: action.error
      };
    }

    default: {
      return state;
    }
  }
};
