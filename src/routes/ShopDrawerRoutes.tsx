import {
  createDrawerNavigator,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import OrderSVG from '../assets/images/icons/slim-order-icon.svg';
import ShopHomeSVG from '../assets/images/icons/slim-shop-home.svg';
import {StorePagesContext, StorePagesData} from '../contexts/StorePages';
import {useBaskets} from '../hooks/basket';
import {useUnitStore} from '../hooks/unitStore';
import {useUnitStoreOffers} from '../hooks/unitStoreOffers';
import {useUserAccountStore} from '../hooks/userAccountStore';
import ShopUserOrders from '../pages/shop/ShopUserOrders';
import {colors} from '../theme';
import {createToggleIconGradient} from '../utils/toggleIcons';
import {AppStackParamList} from './AppRoutes';
import ShopTabRoutes from './ShopTabRoutes';

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

export type ShopDrawerRoutesParamList = {
  ShopTabRoutes: {};
  ShopUserOrders: {};
};

const Drawer = createDrawerNavigator<ShopDrawerRoutesParamList>();

export type ShopDrawerRoutesProps = StackScreenProps<
  AppStackParamList,
  'ShopDrawerRoutes'
>;

export default function ShopDrawerRoutes(props: ShopDrawerRoutesProps) {
  //const {unitStore, userAccountStore, services} = props.route.params;
  const {params} = props.route;

  const userStoreData: StorePagesData = {
    unitStoreQuery: useUnitStore(1),
    unitStoreOffersQuery: useUnitStoreOffers(1),
    userAccountStoreQuery: useUserAccountStore(1, 1),
    basketQuery: useBaskets(1),
  };

  return (
    <StorePagesContext.Provider value={userStoreData}>
      <NavigationContainer independent={true}>
        <Drawer.Navigator
          initialRouteName="ShopTabRoutes"
          drawerPosition="right"
          drawerContentOptions={style.drawerContentOptions}>
          <Drawer.Screen
            name="ShopTabRoutes"
            options={{title: 'Início', drawerIcon: togglableIcons.shopHome}}
            component={ShopTabRoutes}
          />
          <Drawer.Screen
            name="ShopUserOrders"
            options={{title: 'Meus Pedidos', drawerIcon: togglableIcons.order}}
            component={ShopUserOrders}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </StorePagesContext.Provider>
  );
}
