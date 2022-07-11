import type { Dispatch } from 'redux';
import { API_URL } from '../../utils/constants';

export const GET_INGREDIENT_REQUEST = 'GET_INGREDIENT_REQUEST';
export const GET_INGREDIENT_SUCCESS = 'GET_INGREDIENT_SUCCESS';
export const GET_INGREDIENT_FAILED = 'GET_INGREDIENT_FAILED';

export function getIngredients() {
  return function (dispatch: Dispatch) {
    dispatch({
      type: GET_INGREDIENT_REQUEST
    });

    fetch(`${API_URL}/ingredients`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(({ data }) =>
        dispatch({
          type: GET_INGREDIENT_SUCCESS,
          ingredients: data
        })
      )
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENT_FAILED,
          error: `${err}`
        });
      });
  };
}
