import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab, SearchTab, FavoriteTab} from '../tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        {/* <Tab.Screen name="Search" component={SearchTab} /> */}
        <Tab.Screen name="Favorite" component={FavoriteTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
