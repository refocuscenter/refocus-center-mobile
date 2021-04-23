import React, {createContext, useState} from 'react';
import {View, Image} from 'react-native';
import {DrawerNavigation} from '../routes/ShopTabRoutes';

interface ShopDrawerContextData {
  drawerNavigation: DrawerNavigation;
}

export const ShopDrawerContext = createContext<ShopDrawerContextData>(
  {} as ShopDrawerContextData,
);
