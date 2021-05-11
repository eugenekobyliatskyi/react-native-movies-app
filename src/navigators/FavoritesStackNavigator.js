import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, StyleSheet} from 'react-native';
import {MovieDetailsScreen, FavoritesScreen} from '../screens';
import {GlobalContext} from '../context/Provider';
import {DETAILS_SCREEN, FAVORITES_SCREEN} from '../constants';

const {Navigator, Screen} = createStackNavigator();

const FavoritesStackNavigator = () => {
  const {setFavorites} = useContext(GlobalContext);

  const screenOptions = {
    headerTitleStyle: styles.headerTitle,
  };

  const movieDetailsScreenOptions = {
    headerRight: () => <Button title="+" onPress={() => setFavorites()} />,
  };

  return (
    <Navigator
      initialRouteName={FAVORITES_SCREEN}
      screenOptions={screenOptions}>
      <Screen
        name={FAVORITES_SCREEN}
        component={FavoritesScreen}
        options={{headerShown: false}}
      />
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

export default FavoritesStackNavigator;
