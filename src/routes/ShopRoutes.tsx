import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeShop from '../pages/shop/ShopHome';
import MyBasket from '../pages/shop/MyBasket';
import ProductList from '../containers/shop/ProductList';
import Help from '../pages/shop/Help';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IndexRoutes from './index';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

export default function ShopRoutes(props: any) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#1CD69D',
          showLabel: false,
          inactiveTintColor: '#1CD69D',
          style: {backgroundColor: '#fff', shadowColor: '#fff'},
        }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: () => (
              <IconMaterialCommunityIcons
                name="store-outline"
                color="#1CD69D"
                size={36}
              />
            ),
          }}
          component={HomeShop}
          initialParams={{unitStore: props.route.params.unitStore}}
        />
        <Tab.Screen
          name="Lista de Produtos"
          options={{
            tabBarIcon: () => (
              <IconFeather name="box" color="#1CD69D" size={32} />
            ),
          }}
          component={ProductList}
        />
        <Tab.Screen
          name="Minha Cesta"
          options={{
            tabBarIcon: () => (
              <IconMaterialCommunityIcons
                name="basket-outline"
                color="#1CD69D"
                size={34}
              />
            ),
          }}
          component={MyBasket}
          initialParams={{unitStore: props.route.params.unitStore}}
        />
        <Tab.Screen
          name="Ajuda"
          options={{
            tabBarIcon: () => (
              <IconMaterialIcons
                name="help-outline"
                color="#1CD69D"
                size={36}
              />
            ),
          }}
          component={Help}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
