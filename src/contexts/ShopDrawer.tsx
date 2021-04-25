import { createContext } from 'react';
import { DrawerNavigation } from '../routes/ShopTabRoutes';

interface ShopDrawerContextData {
  drawerNavigation: DrawerNavigation;
}

export const ShopDrawerContext = createContext<ShopDrawerContextData>(
  {} as ShopDrawerContextData,
);
