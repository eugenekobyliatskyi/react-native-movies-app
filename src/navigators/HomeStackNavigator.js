import React, {useEffect, useContext} from 'react';
import {Button, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, MovieDetailsScreen} from '../screens';
import {GlobalContext} from '../context/Provider';
import {fetchMovies} from '../utils';
import {retrieveData} from '../utils/storage';
import {HOME_SCREEN, DETAILS_SCREEN} from '../constants';

const {Navigator, Screen} = createStackNavigator();

const HomeStackNavigator = () => {
  const {setMovies, setFavorites} = useContext(GlobalContext);

  useEffect(() => {
    retrieveData('state', data => {
      if (data === null || !data.movies?.length) {
        fetchMovies(setMovies);
      }
    });
  }, [setMovies]);

  const screenOptions = {
    headerTitleStyle: styles.headerTitle,
  };

  const movieDetailsScreenOptions = {
    headerRight: () => <Button title="+" onPress={() => setFavorites()} />,
  };

  return (
    <Navigator initialRouteName={HOME_SCREEN} screenOptions={screenOptions}>
      <Screen name={HOME_SCREEN} component={HomeScreen} />
      <Screen
        name={DETAILS_SCREEN}
        component={MovieDetailsScreen}
        options={movieDetailsScreenOptions}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#424E5B',
  },
});

export default HomeStackNavigator;
