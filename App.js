import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigator from './Navigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}


