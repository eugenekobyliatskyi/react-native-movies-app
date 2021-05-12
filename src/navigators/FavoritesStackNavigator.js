import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {MovieDetailsScreen, FavoritesScreen} from '../screens';
import {GlobalContext} from '../context/Provider';
import {DETAILS_SCREEN, FAVORITES_SCREEN} from '../constants';
import {Favorite} from '../components';

const {Navigator, Screen} = createStackNavigator();

const FavoritesStackNavigator = () => {
  const {selected, favorites, setFavorites} = useContext(GlobalContext);

  const screenOptions = {
    headerTitleStyle: styles.headerTitle,
  };

  const isActive = () => {
    return !!favorites.find(movie => movie.id === selected.id);
  };

  const movieDetailsScreenOptions = {
    headerRight: () => <Favorite active={isActive()} onPress={setFavorites} />,
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
