import { createContext } from 'react';

import { IngredientDataType } from '../utils/types';

const IngredientsContext = createContext<IngredientDataType[] | []>([]);

export default IngredientsContext;
