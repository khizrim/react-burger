import { OrderType } from '../../utils/types';
import { POST_ORDER_REQUEST, POST_ORDER_SUCCESS, POST_ORDER_FAILURE } from '../actions/order';

const orderInitialState = {
  order: {},
  orderRequest: false,
  orderFailed: false,
  error: {}
};

export const orderReducer = (
  state = orderInitialState,
  action: { type: string; order: OrderType; error: '' } = {
    type: '',
    order: {} as OrderType,
    error: ''
  }
) => {
  switch (action.type) {
    case POST_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true
      };
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        order: action.order.order,
        orderRequest: false,
        orderFailed: false
      };
    case POST_ORDER_FAILURE:
      return {
        ...state,
        order: {},
        orderRequest: false,
        orderFailed: true,
        error: action.error
      };

    default:
      return state;
  }
};
