import React, {useContext, useEffect, useState, useCallback} from 'react';
import {Movies, Search} from '../components';
import {GlobalContext} from '../context/Provider';
import {DETAILS_SCREEN} from '../constants';

const FavoritesScreen = ({navigation}) => {
  const {favorites, setSelectedMovie} = useContext(GlobalContext);
  const [_movies, _setMovies] = useState([]);

  useEffect(() => {
    _setMovies(favorites);
  }, [favorites]);

  const handleChangeText = useCallback(
    value => {
      if (value.trim()) {
        _setMovies(() =>
          favorites.filter(
            movie =>
              movie.title.toLowerCase().search(value.toLowerCase()) !== -1,
          ),
        );
      } else {
        _setMovies(favorites);
      }
    },
    [favorites],
  );

  const handlePress = movie => {
    setSelectedMovie(movie);
    navigation.navigate(DETAILS_SCREEN, {movie});
  };

  return (
    <>
      <Search onChangeText={handleChangeText} />
      <Movies data={_movies} onPress={handlePress} />
    </>
  );
};

export default FavoritesScreen;
