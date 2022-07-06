import { API_URL } from './constants';

import { IngredientDataType } from './types';

const getResponseData = (res: Response) => (res.ok ? res.json() : Promise.reject(res.status));

const getIngredients = async () => {
  const res = await fetch(`${API_URL}/ingredients`);

  return getResponseData(res);
};

const sendOrder = async (data: IngredientDataType[]) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients: data.map((e) => e._id)
    })
  });

  return getResponseData(res);
};

export { getIngredients, sendOrder };
