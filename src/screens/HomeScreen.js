import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import {Movies} from '../components';
import {GlobalContext} from '../context/Provider';
import {DETAILS_SCREEN} from '../constants';

const HomeScreen = ({navigation}) => {
  const {setSelectedMovie} = useContext(GlobalContext);

  const handlePress = movie => {
    setSelectedMovie(movie);
    navigation.navigate(DETAILS_SCREEN, {movie});
  };

  const Indicator = (
    <ActivityIndicator style={{padding: 30}} size="small" color="#156FB5" />
  );

  return <Movies onPress={handlePress} ListEmptyComponent={Indicator} />;
};

export default HomeScreen;
