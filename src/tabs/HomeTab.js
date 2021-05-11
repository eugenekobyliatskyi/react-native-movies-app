import React, {useEffect, useContext} from 'react';
import {Button, AsyncStorage} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, MovieDetailsScreen} from '../screens';
import {GlobalContext} from '../context/Provider';
import {useFetchMovieDetails} from '../utils';

const Stack = createStackNavigator();

const HomeTab = () => {
  const {state, dispatch} = useContext(GlobalContext);

  const loadMovies = () => {
    useFetchMovieDetails(
      state.last_id + 1,
      response => {
        dispatch({
          type: 'LOAD_MOVIES',
          payload: response,
        });
      },
      5,
    );
  };

  useEffect(async () => {
    const value = await AsyncStorage.getItem('state');
    if (value === null || !JSON.parse(value).movies?.length) {
      console.log('LOADING MOVIES');
      loadMovies();
    }
  }, []);

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

export default HomeTab;
