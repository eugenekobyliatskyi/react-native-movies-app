import React, {createContext, useReducer, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import reducer from './reducer';

export const GlobalContext = createContext({});

const initialState = {
  selected: {},
  last_id: 584,
  movies: [],
  favorites: [],
};

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem('state');
      if (value !== null) {
        dispatch({
          type: 'SET_STATE',
          payload: JSON.parse(value),
        });
      } else {
        await AsyncStorage.setItem('state', JSON.stringify(initialState));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
