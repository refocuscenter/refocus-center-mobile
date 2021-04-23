import React from 'react';
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import ShopHome from '../pages/shop/ShopHome';
import ProductList from '../containers/shop/ProductList';
import Help from '../pages/shop/ShopInfo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IndexRoutes from './index';
import {createStackNavigator, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  Basket,
  Combo,
  Service,
  ServiceXorCombo,
  UnitStore,
  UserAccountStore,
} from '../types/domain/interfaces';
import {AppStackParamList} from './AppRoutes';
import ShopInfo from '../pages/shop/ShopInfo';
import ShopBasket from '../pages/shop/ShopBasket';
import {colors} from '../theme';
import {IconGradient, IconGradientProps} from '../components/IconGradient';
import {createToggleIconGradient} from '../utils/toggleIcons';
import ShopOffers from '../pages/shop/ShopOffers';
import BasketSVG from '../assets/images/icons/slim-shop-basket-icon.svg';
import ShopHomeSVG from '../assets/images/icons/slim-shop-home.svg';
import {XOR} from '../types/app/operators';
import ShopDrawerRoutes, { ShopDrawerRoutesParamList } from './ShopDrawerRoutes';
import { DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer';

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

export type ShopStackParamList = {
  ShopHome: {
    unitStore: UnitStore;
    userAccountStore: UserAccountStore;
    services: ServiceXorCombo[];
    basket: Basket;
    drawerNavigation: DrawerNavigation;
  };
  ShopOffers: {
    unitStore: UnitStore;
    services: ServiceXorCombo[];
    basket: Basket;
    drawerNavigation: DrawerNavigation;
  };
  ShopBasket: {
    unitStore: UnitStore;
    services: ServiceXorCombo[];
    basket: Basket;
    drawerNavigation: DrawerNavigation;
  };
  ShopInfo: {};
};

type ShopTabRoutesProps = DrawerScreenProps<ShopDrawerRoutesParamList, 'ShopTabRoutes'>;

export type DrawerNavigation = DrawerNavigationProp<ShopDrawerRoutesParamList, "ShopTabRoutes">

const Tab = createBottomTabNavigator<ShopStackParamList>();

export default function ShopTabRoutes(props: ShopTabRoutesProps) {
  //const {unitStore, userAccountStore, services} = props.route.params;
  const {params} = props.route;
  const {navigation} = props;

  const newParams = {...params, drawerNavigation: navigation}

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator tabBarOptions={style.tabBarOptions}>
        <Tab.Screen
          name="ShopHome"
          options={{tabBarIcon: togglableIcons.shopHome}}
          component={ShopHome}
          initialParams={newParams}
        />
        <Tab.Screen
          name="ShopOffers"
          options={{tabBarIcon: togglableIcons.shopOffers}}
          component={ShopOffers}
          initialParams={newParams}
        />
        <Tab.Screen
          name="ShopBasket"
          options={{tabBarIcon: togglableIcons.shopBasket}}
          component={ShopBasket}
          initialParams={newParams}
        />
        <Tab.Screen
          name="ShopInfo"
          options={{tabBarIcon: togglableIcons.shopInfo}}
          component={ShopInfo}
          initialParams={newParams}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
