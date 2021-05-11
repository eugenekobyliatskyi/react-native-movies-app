import React, {useContext, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {Movies} from '../components';
import {GlobalContext} from '../context/Provider';
import {useFetchMovieDetails} from '../utils';

const HomeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const {state, dispatch} = useContext(GlobalContext);

  const loadMovies = () => {
    setLoading(false);
    useFetchMovieDetails(
      state.last_id + 1,
      response => {
        dispatch({type: 'LOAD_MOVIES', payload: response});
        setLoading(true);
      },
      5,
    );
  };

  return (
    <Movies
      onPress={movie => {
        dispatch({type: 'SET_SELECTED_MOVIE', payload: movie});
        navigation.navigate('Movie details', {movie});
      }}
      ListFooterComponent={
        <ActivityIndicator style={{padding: 30}} size="small" color="#156FB5" />
      }
      onEndReached={() => {
        if (loading) loadMovies();
      }}
    />
  );
};

export default HomeScreen;
