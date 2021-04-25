import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ApplicationDataProvider} from './src/contexts/ApplicationData';
import {AuthProvider} from './src/contexts/Auth';
import Routes from './src/routes/index';
export default function App() {
  return (
    <NavigationContainer>
      <ApplicationDataProvider isMockData={false}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ApplicationDataProvider>
    </NavigationContainer>
  );
}
