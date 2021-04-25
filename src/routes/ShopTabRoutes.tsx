import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import BasketSVG from '../assets/images/icons/slim-shop-basket-icon.svg';
import ShopHomeSVG from '../assets/images/icons/slim-shop-home.svg';
import {ShopDrawerContext} from '../contexts/ShopDrawer';
import ShopBasket from '../pages/shop/ShopBasket';
import ShopHome from '../pages/shop/ShopHome';
import ShopInfo from '../pages/shop/ShopInfo';
import ShopOffers from '../pages/shop/ShopOffers';
import {colors} from '../theme';
import {createToggleIconGradient} from '../utils/toggleIcons';
import {ShopDrawerRoutesParamList} from './ShopDrawerRoutes';

const togglableIcons = {
  shopHome: createToggleIconGradient(
    <ShopHomeSVG fill={colors.darkPurple} width="32" height="32" />,
    {
      gradientProps: {gradient: colors.MainDegrade100},
    },
  ),
  shopOffers: createToggleIconGradient(
    <IconIonicons name="cube-outline" color={colors.darkPurple} size={34} />,
    {
      gradientSize: {width: 34, height: 36},
      gradientProps: {gradient: colors.MainDegrade100},
    },
  ),
  shopBasket: createToggleIconGradient(
    <BasketSVG fill={colors.darkPurple} width="32" height="32"></BasketSVG>,
    {gradientProps: {gradient: colors.MainDegrade100}},
  ),
  shopInfo: createToggleIconGradient(
    <IconIonicons
      name="information-circle-outline"
      color={colors.darkPurple}
      size={36}
    />,
    {
      gradientSize: {width: 36, height: 38},
      gradientProps: {gradient: colors.MainDegrade100},
    },
  ),
};

const style = {
  tabBarOptions: {
    activeTintColor: colors.redFF,
    inactiveTintColor: colors.green1C,
    showLabel: false,
    style: {
      shadowOpacity: 0,
      elevation: 0,
      borderTopColor: colors.whiteF2,
      borderTopWidth: 1,
      height: 60,
      marginHorizontal: -25,
    },
  } as BottomTabBarOptions,
};

type ShopTabRoutesProps = DrawerScreenProps<
  ShopDrawerRoutesParamList,
  'ShopTabRoutes'
>;

export type DrawerNavigation = DrawerNavigationProp<ShopDrawerRoutesParamList>;

export type ShopStackParamList = {
  ShopHome: {};
  ShopOffers: {};
  ShopBasket: {};
  ShopInfo: {};
};

const Tab = createBottomTabNavigator<ShopStackParamList>();

export default function ShopTabRoutes(props: ShopTabRoutesProps) {
  //const {unitStore, userAccountStore, services} = props.route.params;
  const {navigation} = props;

  return (
    <NavigationContainer independent={true}>
      <ShopDrawerContext.Provider value={{drawerNavigation: navigation}}>
        <Tab.Navigator tabBarOptions={style.tabBarOptions}>
          <Tab.Screen
            name="ShopHome"
            options={{tabBarIcon: togglableIcons.shopHome}}
            component={ShopHome}
          />
          <Tab.Screen
            name="ShopOffers"
            options={{tabBarIcon: togglableIcons.shopOffers}}
            component={ShopOffers}
          />
          <Tab.Screen
            name="ShopBasket"
            options={{tabBarIcon: togglableIcons.shopBasket}}
            component={ShopBasket}
          />
          <Tab.Screen
            name="ShopInfo"
            options={{tabBarIcon: togglableIcons.shopInfo}}
            component={ShopInfo}
          />
        </Tab.Navigator>
      </ShopDrawerContext.Provider>
    </NavigationContainer>
  );
}
