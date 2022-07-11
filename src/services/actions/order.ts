import type { Dispatch } from 'redux';
import { API_URL } from '../../utils/constants';
import { IngredientDataType } from '../../utils/types';
import { resetConstructor } from './constructor';

export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_FAILURE = 'POST_ORDER_FAILURE';

export function postOrder(ingredients: IngredientDataType[]) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST
    });

    fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients: ingredients.map((e) => e._id)
      })
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) =>
        dispatch({
          type: POST_ORDER_SUCCESS,
          order: data
        })
      )
      .then(() => {
        dispatch(resetConstructor());
      })
      .catch((err) => {
        dispatch({
          type: POST_ORDER_FAILURE,
          error: `Ошибка: ${err}`
        });
      });
  };
}
