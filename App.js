import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import TransactionsProvider from './src/context/TransactionsContext';

const App = () => {
  return (
    <TransactionsProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </TransactionsProvider>
  );
};

export default App;
