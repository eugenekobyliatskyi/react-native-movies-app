import {mergeData} from '../utils/storage';

const reducer = (state, {type, payload}) => {
  let newState;

  switch (type) {
    case 'set-state':
      return payload;
    case 'set-movies':
      newState = {
        ...state,
        movies: [...state.movies, ...payload],
      };
      mergeData('state', newState);
      return newState;
    case 'set-selected-movie':
      return {
        ...state,
        selected: payload,
      };
    case 'set-favorites':
      const {selected, favorites} = state;
      newState = {
        ...state,
        favorites: favorites.find(({id}) => id === selected.id)
          ? favorites.filter(({id}) => id !== selected.id)
          : [...favorites, selected],
      };
      mergeData('state', newState);
      return newState;
    default:
      return state;
  }
};

export default reducer;
