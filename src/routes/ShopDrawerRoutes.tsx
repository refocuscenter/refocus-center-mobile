import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {
  UnitStore,
  UserAccountStore,
  ServiceXorCombo,
  Basket,
} from '../types/domain/interfaces';
import ShopHome from '../pages/shop/ShopHome';
import ShopTabRoutes from './ShopTabRoutes';

const Drawer = createDrawerNavigator();

export type ShopDrawerRoutesParamList = {
  ShopTabRoutes: {
    unitStore: UnitStore;
    userAccountStore: UserAccountStore;
    services: ServiceXorCombo[];
    basket: Basket;
  };
};

export type ShopDrawerRoutesProps = StackScreenProps<
  ShopDrawerRoutesParamList,
  'ShopTabRoutes'
>;

export default function ShopDrawerRoutes(props: ShopDrawerRoutesProps) {
  //const {unitStore, userAccountStore, services} = props.route.params;
  const {params} = props.route;

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="ShopTabRoutes">
        <Drawer.Screen
          name="ShopTabRoutes"
          component={ShopTabRoutes}
          initialParams={{...params}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
