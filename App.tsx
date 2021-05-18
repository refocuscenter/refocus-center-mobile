import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {runConfig} from './src/config';
import {AuthProvider} from './src/contexts/Auth';
import Routes from './src/routes/index';
export default function App() {
  const queryClient = new QueryClient();

  runConfig();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
