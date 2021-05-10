import React, {createContext, useReducer} from 'react';
import reducer from './reducer';

export const GlobalContext = createContext({});

const initialState = {
  selected: null,
  last_id: 584,
  movies: [],
  favorites: [],
};

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
