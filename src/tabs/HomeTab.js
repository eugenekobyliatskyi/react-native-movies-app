import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, MovieDetailsScreen} from '../screens';

const Stack = createStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          textAlign: 'center',
          fontSize: 16,
          color: '#424E5B',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movie details" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeTab;
