import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab, FavoritesTab} from '../tabs';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Favorites" component={FavoritesTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
