import { call, put, takeEvery } from "redux-saga/effects";

import * as ActionTypes from "./actionTypes";
import * as ModalsActionTypes from "../modals/actionTypes";
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "./actions";
import { getMoviesAsync } from "../../services/movieService";

const initialState = {
  search: '',
  movies: [],
  loading: false,
  error: null,
  genre: "All",
  sortBy: "releaseDate",
  selectedMovie: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        movies: [],
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: [],
        loading: false,
        error: action.payload,
      };
    case ActionTypes.SET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionTypes.SUBMIT_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    case ModalsActionTypes.OPEN_EDIT_MOVIE_MODAL:
    case ModalsActionTypes.OPEN_DELETE_MOVIE_MODAL:
    case ActionTypes.SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: state.movies.find((element) => element.id === action.payload.id),
      };
    case ModalsActionTypes.CLOSE_MOVIE_MODAL:
      return {
        ...state,
        selectedMovie: null,
      };
    case ActionTypes.SELECT_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      }
    default:
      return state;
  }
};

export default moviesReducer;

export function* fetchMoviesAsync(action) {
  try {
    const { genre, search, sortBy } = action.payload;
    yield put(fetchMoviesRequest());
    const data = yield call(() => getMoviesAsync(genre, search, sortBy));
    yield put(fetchMoviesSuccess(data));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

export function* watchFetchMovies() {
  yield takeEvery(ActionTypes.FETCH_MOVIES_START, fetchMoviesAsync);
}
