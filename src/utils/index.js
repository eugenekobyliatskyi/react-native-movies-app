const fetchData = (id, number, callback, movies) => {
  (async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=16fd60f3d1e16106def5fa945b3c9cb9`,
    );
    const data = await response.json();
    if (data?.id) {
      data.id = data.id.toString();

      if (number) {
        fetchData(id + 1, number - 1, callback, [...movies, data]);
      } else {
        callback({id, movies: [...movies, data]});
      }
    } else {
      fetchData(id + 1, number, callback, movies);
    }
  })();
};

export const useFetchMovieDetails = (id, callback, number = 1) => {
  fetchData(id, number - 1, callback, []);
};
