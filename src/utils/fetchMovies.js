const fetchMovieDetails = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/discover/movie?&api_key=16fd60f3d1e16106def5fa945b3c9cb9',
  );
  return await response.json();
};

const fetchGenres = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=16fd60f3d1e16106def5fa945b3c9cb9',
  );
  return await response.json();
};

const fetchMovies = async callback => {
  const {results: detailsOfMovies} = await fetchMovieDetails();
  const {genres} = await fetchGenres();

  detailsOfMovies.forEach(details => {
    details.genres = details.genre_ids.map(genre_id =>
      genres.find(({id}) => id === genre_id),
    );
  });

  callback(detailsOfMovies);
};

export default fetchMovies;
