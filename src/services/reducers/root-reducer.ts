import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients-reducer';
import { constructorReducer } from './constructor-reducer';
import { orderReducer } from './ordrer-reducer';

export const rootReducer = combineReducers({
  ingredientsReducer,
  constructorReducer,
  orderReducer
});
