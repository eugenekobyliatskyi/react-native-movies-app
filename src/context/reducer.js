const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'LOAD_MOVIES':
      return {
        ...state,
        last_movie_id: payload.id,
        movies: [...state.movies, ...payload.movies],
      };
    case 'SET_ACTIVE_MOVIE':
      return {
        ...state,
        active_movie: payload,
      };
    case 'ADD_TO_FAVOTIRE':
      return {
        ...state,
        favorite: [...state.favorite, state.active_movie],
      };
    default:
      return state;
  }
};

export default reducer;
