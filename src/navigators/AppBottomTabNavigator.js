import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator, FavoritesStackNavigator} from './index';
import {FAVORITES_STACK_NAVIGATOR, HOME_STACK_NAVIGATOR} from '../constants';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {Navigator, Screen} = createBottomTabNavigator();

const AppBottomTabNavigator = () => {
  const screenOptions = ({route}) => ({
    tabBarIcon: ({color, size}) => {
      let iconName;
      if (route.name === HOME_STACK_NAVIGATOR) {
        iconName = 'local-movies';
      } else if (route.name === FAVORITES_STACK_NAVIGATOR) {
        iconName = 'favorite';
      }
      return <MaterialIcons name={iconName} size={size} color={color} />;
    },
  });

  const tabBarOptions = {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  };

  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
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
