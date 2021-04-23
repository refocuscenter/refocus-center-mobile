import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentOptions,
} from '@react-navigation/drawer';
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
import ShopBasket from '../pages/shop/ShopBasket';
import ShopOffers from '../pages/shop/ShopOffers';
import ShopUserOrders from '../pages/shop/ShopUserOrders';
import {colors} from '../theme';
import {BottomTabBarOptions} from '@react-navigation/bottom-tabs';
import {createToggleIconGradient} from '../utils/toggleIcons';
import ShopHomeSVG from '../assets/images/icons/slim-shop-home.svg';
import OrderSVG from '../assets/images/icons/slim-order-icon.svg';

const Drawer = createDrawerNavigator();

export type ShopDrawerRoutesParamList = {
  ShopTabRoutes: {
    unitStore: UnitStore;
    userAccountStore: UserAccountStore;
    services: ServiceXorCombo[];
    basket: Basket;
  };
  ShopUserOrders: {};
};

export type ShopDrawerRoutesProps = StackScreenProps<
  ShopDrawerRoutesParamList,
  'ShopTabRoutes'
>;

const style = {
  drawerContentOptions: {
    activeTintColor: colors.black0B,
    inactiveTintColor: colors.black0B,
    labelStyle: {
      paddingHorizontal: 0,
      marginLeft: -15,
    },
    itemStyle: {
      backgroundColor: colors.white,
    },
  } as DrawerContentOptions,
};

const togglableIcons = {
  shopHome: createToggleIconGradient(
    <ShopHomeSVG fill={colors.darkPurple} width="32" height="32" />,
    {
      gradientProps: {gradient: colors.MainDegrade100},
    },
  ),
  order: createToggleIconGradient(
    <OrderSVG
      fill={colors.darkPurple}
      style={{marginLeft: 3, marginRight: 0}}
      width="28"
      height="28"
    />,
    {
      gradientProps: {gradient: colors.MainDegrade100},
    },
  ),
};

export default function ShopDrawerRoutes(props: ShopDrawerRoutesProps) {
  //const {unitStore, userAccountStore, services} = props.route.params;
  const {params} = props.route;

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="ShopTabRoutes"
        drawerPosition="right"
        drawerContentOptions={style.drawerContentOptions}>
        <Drawer.Screen
          name="ShopTabRoutes"
          options={{title: 'Início', drawerIcon: togglableIcons.shopHome}}
          component={ShopTabRoutes}
          initialParams={params}
        />
        <Drawer.Screen
          name="ShopUserOrders"
          options={{title: 'Meus Pedidos', drawerIcon: togglableIcons.order}}
          component={ShopUserOrders}
          initialParams={params}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
