import React from 'react';
import { Provider as PaperProvider} from 'react-native-paper'
import { theme } from './src/theme'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';

import {AuthProvider} from './src/contexts/Auth';

export default function App() {
  return (
    <PaperProvider theme={theme}>      
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>      
    </PaperProvider>
  );
}
