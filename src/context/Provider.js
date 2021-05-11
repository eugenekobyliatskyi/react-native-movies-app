import React, {createContext, useReducer, useEffect, useCallback} from 'react';
import reducer from './reducer';
import {retrieveData, storeData} from '../utils/storage';

export const GlobalContext = createContext({});

const initialState = {
  selected: {},
  movies: [],
  favorites: [],
};

const GlobalProvider = ({children}) => {
  const [{movies, favorites}, dispatch] = useReducer(reducer, initialState);

  const setState = useCallback(newState => {
    dispatch({
      type: 'set-state',
      payload: newState,
    });
  }, []);

  const setMovies = newMovies => {
    dispatch({
      type: 'set-movies',
      payload: newMovies,
    });
  };

  const setSelectedMovie = movie => {
    dispatch({
      type: 'set-selected-movie',
      payload: movie,
    });
  };

  const setFavorites = () => {
    dispatch({
      type: 'set-favorites',
    });
  };

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
