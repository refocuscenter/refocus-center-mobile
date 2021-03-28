import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeShopRoutes from './ShopRoutes';
import Home from '../pages/app/AppHome';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
    return (
        <NavigationContainer independent>
            <AppStack.Navigator headerMode='none'>         
                <AppStack.Screen name="Home" component={Home} />   
                <AppStack.Screen name="HomeShop" component={HomeShopRoutes} initialParams={{unitStore: undefined}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;