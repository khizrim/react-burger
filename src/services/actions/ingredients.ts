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

    fetch(API_URL)
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        }

        throw Error(`${res.status} ${res.statusText}`);
      })
      .then(({ data }) =>
        dispatch({
          type: GET_INGREDIENT_SUCCESS,
          ingredients: data
        })
      )
      .catch(() => {
        dispatch({
          type: GET_INGREDIENT_FAILED,
          error: 'Ошибка'
        });
      });
  };
}
