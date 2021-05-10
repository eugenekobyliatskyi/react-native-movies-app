const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'LOAD_MOVIES':
      return {
        ...state,
        last_id: payload.id,
        movies: [...state.movies, ...payload.movies],
      };
    case 'SET_SELECTED_MOVIE':
      return {
        ...state,
        selected: payload,
      };
    case 'TOGGLE_ADD_TO_FAVORITES':
      const {selected, favorites} = state;
      return {
        ...state,
        favorites: favorites.find(({id}) => id === selected.id)
          ? favorites.filter(({id}) => id !== selected.id)
          : [...favorites, selected],
      };
    default:
      return state;
  }
};

export default reducer;
