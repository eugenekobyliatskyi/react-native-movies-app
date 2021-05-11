import React from 'react';
import {AppBottomTabNavigator} from './src/navigators';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppBottomTabNavigator />
    </GlobalProvider>
  );
};

export default App;
