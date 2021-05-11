import {AsyncStorage} from 'react-native';

const reducer = (state, {type, payload}) => {
  let newState;

  switch (type) {
    case 'SET_STATE':
      return payload;
    case 'LOAD_MOVIES':
      newState = {
        ...state,
        last_id: payload.id,
        movies: [...state.movies, ...payload.movies],
      };
      AsyncStorage.mergeItem('state', JSON.stringify(newState));
      return newState;
    case 'SET_SELECTED_MOVIE':
      return {
        ...state,
        selected: payload,
      };
    case 'TOGGLE_ADD_TO_FAVORITES':
      const {selected, favorites} = state;
      newState = {
        ...state,
        favorites: favorites.find(({id}) => id === selected.id)
          ? favorites.filter(({id}) => id !== selected.id)
          : [...favorites, selected],
      };
      AsyncStorage.mergeItem('state', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default reducer;
