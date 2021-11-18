import { call, select } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import reducer, {
  fetchMoviesAsync,
  postMovieAsync,
  deleteMovieAsync,
  editMovieAsync,
} from "./moviesReducer";
import * as actions from "./actions";
import * as modalActions from "../modals/actions";
import * as api from "../../services/movieService";
import { searchOptionsSelector } from "./selectors";

describe("[movies/reducer]", () => {
  const initialState = {
    search: "",
    movies: [],
    loading: false,
    error: null,
    genre: "All",
    sortBy: "releaseDate",
    selectedMovie: null,
  };

  it("should return the initial state", () => {
    const newState = reducer(initialState, {});

    expect(newState).toEqual(initialState);
  });

  it("should handle fetch movies loading", () => {
    const givenAction = actions.fetchMoviesRequest();

    const newState = reducer(initialState, givenAction);

    expect(newState).toEqual({
      ...initialState,
      movies: [],
      loading: true,
      error: null,
    });
  });

  it("should handle fetch movies success", () => {
    const payload = [{ data: "data" }];
    const givenAction = actions.fetchMoviesSuccess(payload);

    const newState = reducer(initialState, givenAction);

    expect(newState).toEqual({
      ...initialState,
      movies: payload,
      loading: false,
      error: null,
    });
  });

  it("should handle fetch movies error", () => {
    const payload = { message: "error" };
    const givenAction = actions.fetchMoviesFailure(payload);

    const newState = reducer(initialState, givenAction);

    expect(newState).toEqual({
      ...initialState,
      movies: [],
      loading: false,
      error: payload,
    });
  });

  it.each`
    action                        | actionType
    ${actions.postMovieRequest}   | ${"post movie"}
    ${actions.deleteMovieRequest} | ${"delete movie"}
    ${actions.editMovieRequest}   | ${"edit movie"}
  `("should handle $actionType loading", ({ action }) => {
    const givenAction = action();

    const newState = reducer(initialState, givenAction);

    expect(newState).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it.each`
    action                        | actionName
    ${actions.postMovieSuccess}   | ${"post movie"}
    ${actions.deleteMovieSuccess} | ${"delete movie"}
    ${actions.editMovieSuccess}   | ${"edit movie"}
  `("should handle $actionName success", ({ action }) => {
    const givenAction = action();

    const newState = reducer(initialState, givenAction);

    expect(newState).toEqual({
      ...initialState,
      loading: false,
      error: null,
    });
  });

  it.each`
    action                        | actionName
    ${actions.postMovieFailure}   | ${"post movie"}
    ${actions.deleteMovieFailure} | ${"delete movie"}
    ${actions.editMovieFailure}   | ${"edit movie"}
  `("should handle $actionName error", ({ action }) => {
    const payload = { message: "error" };
    const givenAction = action(payload);

    const newState = reducer(initialState, givenAction);

    expect(newState).toEqual({
      ...initialState,
      loading: false,
      error: payload,
    });
  });

  it("should set genre", () => {
    const payload = "genre example";
    const givenAction = actions.setGenre(payload);

    const newState = reducer(initialState, givenAction);

    expect(newState).toEqual({
      ...initialState,
      genre: payload,
    });
  });

  it("should submit search", () => {
    const payload = "search example";
    const givenAction = actions.submitSearch(payload);

    const newState = reducer(initialState, givenAction);

    expect(newState).toEqual({
      ...initialState,
      search: payload,
    });
  });

  it.each`
    action                               | actionName
    ${modalActions.openEditMovieModal}   | ${"openEditMovieModal"}
    ${modalActions.openDeleteMovieModal} | ${"openDeleteMovieModal"}
    ${actions.selectMovie}               | ${"selectMovie"}
  `("should select movie when handling $actionName", ({ action }) => {
    const payload = 12;
    const movie = { id: 12, title: "movie title" };
    const givenState = { ...initialState, movies: [movie] };
    const givenAction = action(payload);

    const newState = reducer(givenState, givenAction);

    expect(newState).toEqual({
      ...givenState,
      selectedMovie: movie,
    });
  });

  it("should close movie modal", () => {
    const givenAction = modalActions.closeMovieModal();

    const newState = reducer(initialState, givenAction);

    expect(newState).toEqual({
      ...initialState,
      selectedMovie: null,
    });
  });

  it("should select sortBy", () => {
    const payload = "voteAverage";
    const givenAction = actions.selectSortBy(payload);

    const newState = reducer(initialState, givenAction);

    expect(newState).toEqual({
      ...initialState,
      sortBy: payload,
    });
  });
});

describe("[movies/sagas]", () => {
  const searchOptions = {
    genre: "All",
    search: "",
    sortBy: "releaseDate",
  };

  const movie = {
    id: 2,
    genres: [{ id: 2, name: "Romance" }],
    overview: "overview example",
    posterPath:
      "https://sm.ign.com/t/ign_za/gallery/b/big-upcomi/big-upcoming-movie-releases-of-2020_rr42.1080.jpg",
    releaseDate: "2021-05-06",
    runtime: "23",
    title: "title",
    voteAverage: "23",
  };

  const error = new Error("error");

  it("should fetch Movies successfully", () => {
    const movies = [{ id: 12, title: "movie title" }];

    return expectSaga(fetchMoviesAsync, {
      payload: searchOptions,
    })
      .provide([[call(api.getMoviesAsync, searchOptions), movies]])
      .put(actions.fetchMoviesRequest())
      .put(actions.fetchMoviesSuccess(movies))
      .run();
  });

  it("should fail to fetch Movies", () => {
    return expectSaga(fetchMoviesAsync, {
      payload: searchOptions,
    })
      .provide([[matchers.call.fn(api.getMoviesAsync), throwError(error)]])
      .put(actions.fetchMoviesRequest())
      .put(actions.fetchMoviesFailure(error))
      .run();
  });

  it("should post Movie successfully", () => {
    return expectSaga(postMovieAsync, {
      payload: movie,
    })
      .provide([
        [call(api.postMovie, movie), undefined],
        [select(searchOptionsSelector), searchOptions],
        [call(fetchMoviesAsync, { payload: searchOptions }, false), undefined],
      ])
      .put(actions.postMovieRequest())
      .put(actions.postMovieSuccess())
      .call(fetchMoviesAsync, { payload: searchOptions })
      .run();
  });

  it("should fail to post Movie", () => {
    return expectSaga(postMovieAsync, {
      payload: movie,
    })
      .provide([[matchers.call.fn(api.postMovie, movie), throwError(error)]])
      .put(actions.postMovieRequest())
      .put(actions.postMovieFailure(error))
      .run();
  });

  it("should delete Movie successfully", () => {
    const payload = { id: 2 };
    return expectSaga(deleteMovieAsync, {
      payload: payload,
    })
      .provide([
        [call(api.deleteMovie, payload), undefined],
        [select(searchOptionsSelector), searchOptions],
        [call(fetchMoviesAsync, { payload: searchOptions }, false), undefined],
      ])
      .put(actions.deleteMovieRequest())
      .put(actions.deleteMovieSuccess())
      .call(fetchMoviesAsync, { payload: searchOptions })
      .run();
  });

  it("should fail to delete Movie", () => {
    const payload = { id: 2 };
    return expectSaga(deleteMovieAsync, {
      payload: payload,
    })
      .provide([
        [matchers.call.fn(api.deleteMovie, payload), throwError(error)],
      ])
      .put(actions.deleteMovieRequest())
      .put(actions.deleteMovieFailure(error))
      .run();
  });

  it("should edit Movie successfully", () => {
    return expectSaga(editMovieAsync, {
      payload: movie,
    })
      .provide([
        [call(api.editMovie, movie), undefined],
        [select(searchOptionsSelector), searchOptions],
        [call(fetchMoviesAsync, { payload: searchOptions }, false), undefined],
      ])
      .put(actions.editMovieRequest())
      .put(actions.editMovieSuccess())
      .call(fetchMoviesAsync, { payload: searchOptions })
      .run();
  });

  it("should fail to post Movie", () => {
    return expectSaga(editMovieAsync, {
      payload: movie,
    })
      .provide([[matchers.call.fn(api.editMovie, movie), throwError(error)]])
      .put(actions.editMovieRequest())
      .put(actions.editMovieFailure(error))
      .run();
  });
});
