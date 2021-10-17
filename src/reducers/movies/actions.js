import * as ActionTypes from "./actionTypes";

const fetchMoviesStart = (payload) => ({
  type: ActionTypes.FETCH_MOVIES_START,
  payload: payload,
});
const fetchMoviesRequest = () => ({
  type: ActionTypes.FETCH_MOVIES_REQUEST,
});
const fetchMoviesSuccess = (movies) => ({
  type: ActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies,
});
const fetchMoviesFailure = (error) => ({
  type: ActionTypes.FETCH_MOVIES_FAILURE,
  payload: error,
});
const setGenre = (genre) => ({
  type: ActionTypes.SET_GENRE,
  payload: genre,
});
const selectMovie = (id) => ({
  type: ActionTypes.SELECT_MOVIE,
  payload: { id: id },
});
const selectSortBy = (sortBy) => ({
  type: ActionTypes.SELECT_SORT_BY,
  payload: sortBy,
});
const submitSearch = (search) => ({
  type: ActionTypes.SUBMIT_SEARCH,
  payload: search,
});

export {
  fetchMoviesStart,
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  setGenre,
  selectMovie,
  selectSortBy,
  submitSearch,
};
