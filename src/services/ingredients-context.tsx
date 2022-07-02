import { createContext } from 'react';

import { IngredientData } from '../utils/types';

const IngredientsContext = createContext<IngredientData[] | []>([]);

export default IngredientsContext;
