import React, {useContext} from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MovieDetailsScreen, FavoritesScreen} from '../screens';
import {GlobalContext} from '../context/Provider';

const Stack = createStackNavigator();

const FavoriteTab = () => {
  const {dispatch} = useContext(GlobalContext);

  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerTitleStyle: {
          textAlign: 'center',
          fontSize: 16,
          color: '#424E5B',
        },
      }}>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Movie details"
        component={MovieDetailsScreen}
        options={{
          headerRight: () => (
            <Button
              title="+"
              onPress={() => dispatch({type: 'TOGGLE_ADD_TO_FAVORITES'})}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteTab;
