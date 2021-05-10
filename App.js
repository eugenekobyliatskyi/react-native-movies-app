import React from 'react';
import AppNavigator from './src/navigators';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavigator />
    </GlobalProvider>
  );
};

export default App;
