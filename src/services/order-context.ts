import { createContext } from 'react';
import { OrderType } from '../utils/types';

const OrderContext = createContext<OrderType>({} as OrderType);

export default OrderContext;
