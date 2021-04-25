import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ShopDrawerRoutes from './ShopDrawerRoutes';

export type AppStackParamList = {
  ShopDrawerRoutes: {};
};

const AppStack = createStackNavigator<AppStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer independent>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="ShopDrawerRoutes" component={ShopDrawerRoutes} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
