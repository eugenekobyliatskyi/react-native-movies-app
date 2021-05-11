import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator, FavoritesStackNavigator} from './index';
import {FAVORITES_STACK_NAVIGATOR, HOME_STACK_NAVIGATOR} from '../constants';

const {Navigator, Screen} = createBottomTabNavigator();

const AppBottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={HOME_STACK_NAVIGATOR} component={HomeStackNavigator} />
        <Screen
          name={FAVORITES_STACK_NAVIGATOR}
          component={FavoritesStackNavigator}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppBottomTabNavigator;
