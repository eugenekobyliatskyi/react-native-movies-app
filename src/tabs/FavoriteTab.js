import React, {useContext, useEffect, useState} from 'react';
import {Movies, Search} from '../components';
import {GlobalContext} from '../context/Provider';

const FavoriteTab = () => {
  const {state} = useContext(GlobalContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(state.favorites);
  }, [state]);

  const changeTextHandler = value => {
    if (value) {
      setMovies(prev =>
        prev.filter(
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
      <Movies data={movies} />
    </>
  );
};

export default FavoriteTab;
