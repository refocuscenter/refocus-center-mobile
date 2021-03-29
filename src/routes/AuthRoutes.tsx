import React from 'react';
import Login from '../pages/Login';

import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../theme';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <AuthStack.Navigator headerMode='none' screenOptions={{ headerStyle: { elevation: 0 }, cardStyle: { backgroundColor: colors.white } }}>
            <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;