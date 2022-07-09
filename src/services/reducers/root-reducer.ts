import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients-reducer';
import { orderReducer } from './ordrer-reducer';

export const rootReducer = combineReducers({
  ingredientsReducer,
  orderReducer
});
