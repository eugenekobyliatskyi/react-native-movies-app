import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab, SearchTab, FavoriteTab, FavotireTab} from '../tabs';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="Favorite" component={FavotireTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
