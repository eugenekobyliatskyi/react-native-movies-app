import React, {useContext, useEffect, useState} from 'react';
import {Movies, Search} from '../components';
import {GlobalContext} from '../context/Provider';

const FavoritesScreen = ({navigation}) => {
  const {state, dispatch} = useContext(GlobalContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(state.favorites);
  }, [state]);

  const changeTextHandler = value => {
    if (value.trim()) {
      setMovies(() =>
        state.favorites.filter(
          movie => movie.title.toLowerCase().search(value.toLowerCase()) !== -1,
        ),
      );
    } else {
      setMovies(state.favorites);
    }
  };

  return (
    <>
      <Search onChangeText={changeTextHandler} />
      <Movies
        onPress={movie => {
          dispatch({type: 'SET_SELECTED_MOVIE', payload: movie});
          navigation.navigate('Movie details', {movie});
        }}
        data={movies}
      />
    </>
  );
};

export default FavoritesScreen;
