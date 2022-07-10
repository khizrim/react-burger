import { createContext } from 'react';
import { TabsType } from '../utils/types';

const TabsContext = createContext<TabsType>({} as TabsType);

export default TabsContext;
