const moviesSelector = (state) => state.moviesReducer.movies;
const selectedMovieSelector = (state) => state.moviesReducer.selectedMovie;
const loadingSelector = (state) => state.moviesReducer.loading;
const errorSelector = (state) => state.moviesReducer.error;
const genreSelector = (state) => state.moviesReducer.genre;
const searchSelector = (state) => state.moviesReducer.search;
const sortBySelector = (state) => state.moviesReducer.sortBy;

export {
  moviesSelector,
  selectedMovieSelector,
  loadingSelector,
  errorSelector,
  genreSelector,
  searchSelector,
  sortBySelector,
};
