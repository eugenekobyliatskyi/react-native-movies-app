import React, {createContext, useReducer, useEffect, useCallback} from 'react';
import globalReducer from './globalReducer';
import {retrieveData, storeData} from '../utils/storage';

export const GlobalContext = createContext({});

const initialState = {
  selected: {},
  movies: [],
  favorites: [],
};

const GlobalProvider = ({children}) => {
  const [{selected, movies, favorites}, dispatch] = useReducer(
    globalReducer,
    initialState,
  );

  const setState = useCallback(newState => {
    dispatch({
      type: 'set-state',
      payload: newState,
    });
  }, []);

  const setMovies = useCallback(newMovies => {
    dispatch({
      type: 'set-movies',
      payload: newMovies,
    });
  }, []);

  const setSelectedMovie = useCallback(movie => {
    dispatch({
      type: 'set-selected-movie',
      payload: movie,
    });
  }, []);

  const setFavorites = useCallback(() => {
    dispatch({
      type: 'set-favorites',
    });
  }, []);

  useEffect(() => {
    retrieveData('state', data => {
      if (data) {
        setState(data);
      } else {
        storeData('state', initialState);
      }
    });
  }, [setState]);

  return (
    <GlobalContext.Provider
      value={{
        selected,
        movies,
        favorites,
        setMovies,
        setSelectedMovie,
        setFavorites,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
