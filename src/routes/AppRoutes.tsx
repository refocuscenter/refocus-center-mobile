import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShopRoutes from './ShopRoutes';
import {NavigationContainer} from '@react-navigation/native';
import {Basket, Combo, OfferXorCombo, Service, ServiceXorCombo, UnitStore, UserAccountStore} from '../types/domain/interfaces';
import {kitCleanUnit1} from '../mocks/store';
import {user} from '../mocks/user';
import {colors} from '../theme';
import { XOR } from '../types/app/operators';
import { kitCleanAllServicesAndCombos } from '../mocks/services';

export type AppStackParamList = {
  Shop: {
    unitStore: UnitStore;
    userAccountStore: UserAccountStore;
    services: ServiceXorCombo[];
    basket: Basket;
  };
};

const AppStack = createStackNavigator<AppStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer independent>
      <AppStack.Navigator
        headerMode="none">
        <AppStack.Screen
          name="Shop"
          component={ShopRoutes}
          initialParams={{
            //CALLING MOCKS
            basket: user.userAccountInStore[0].basket,
            services: kitCleanAllServicesAndCombos,
            unitStore: kitCleanUnit1,
            userAccountStore: user.userAccountInStore[0],
          }}
        />
        {/*<AppStack.Screen name="Home" component={Home} />*/}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
