import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {ApplicationDataProvider} from './src/contexts/ApplicationData';
import {AuthProvider} from './src/contexts/Auth';
import Routes from './src/routes/index';
import {paperTheme} from './src/theme';

export default function App() {
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <ApplicationDataProvider isMockData={true}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ApplicationDataProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}
