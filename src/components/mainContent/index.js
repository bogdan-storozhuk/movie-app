import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import MovieList from "../movieList";
import ControlPanel from "../controlPanel";
import MovieCount from "../movieCount";
import ErrorBoundry from "../errorBoundry";

import WithLoading from "../../hoc/withLoading";
import { useQuery } from "../../hooks/index";

import {
  moviesSelector,
  loadingSelector,
  errorSelector,
  genreSelector,
  searchSelector,
  sortBySelector,
  selectedMovieSelector,
} from "../../reducers/movies/selectors";
import {
  fetchMoviesStart,
  submitSearch,
  setGenre,
  selectSortBy,
  selectMovie,
} from "../../reducers/movies/actions";

import "./mainContent.css";

const MovieListWithLoading = WithLoading(MovieList);

const MainContent = ({
  movies,
  genre,
  sortBy,
  loading,
  search,
  selectedMovie,
  fetchMoviesStart,
  submitSearch,
  setGenre,
  selectSortBy,
  selectMovie,
}) => {
  const { searchQuery } = useParams();
  const query = useQuery();
  const genreParam = query.get("genre");
  const sortByParam = query.get("sortBy");
  const movieByParam = parseInt(query.get("movie"));

  useEffect(() => {
    fetchMoviesStart({ genre, search, sortBy });
  }, [genre, search, sortBy]);

  useEffect(() => {
    if (searchQuery !== search) {
      submitSearch(searchQuery);
    }
    if (genreParam && genreParam !== genre) {
      setGenre(genreParam);
    }
    if (sortByParam && sortByParam !== sortBy) {
      selectSortBy(sortByParam);
    }
    if (movieByParam && movieByParam !== selectedMovie?.id) {
      selectMovie(movieByParam);
    }
  }, [searchQuery, genreParam, sortByParam, movieByParam, movies]);

  return (
    <div className="MainContent">
      <ControlPanel />
      <MovieCount count={movies.length} />
      <ErrorBoundry>
        <MovieListWithLoading loading={loading} movies={movies} />
      </ErrorBoundry>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  movies: moviesSelector,
  loading: loadingSelector,
  error: errorSelector,
  genre: genreSelector,
  search: searchSelector,
  sortBy: sortBySelector,
  selectedMovie: selectedMovieSelector,
});

function mapDispatchToProps(dispatch) {
  return {
    fetchMoviesStart: (genre) => dispatch(fetchMoviesStart(genre)),
    submitSearch: (search) => dispatch(submitSearch(search)),
    setGenre: (genre) => dispatch(setGenre(genre)),
    selectSortBy: (sortBy) => dispatch(selectSortBy(sortBy)),
    selectMovie: (id) => dispatch(selectMovie(id)),
  };
}

MainContent.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      budget: PropTypes.number,
      genres: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
      ),
      id: PropTypes.number,
      overview: PropTypes.string,
      posterPath: PropTypes.string,
      releaseDate: PropTypes.string,
      revenue: PropTypes.number,
      runtime: PropTypes.number,
      tagline: PropTypes.string,
      title: PropTypes.string,
      voteAverage: PropTypes.number,
      voteCount: PropTypes.number,
    })
  ),
  genre: PropTypes.string,
  sortBy: PropTypes.string,
  loading: PropTypes.bool,
  search: PropTypes.string,
  selectedMovie: PropTypes.shape({
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
    ),
    id: PropTypes.number,
    overview: PropTypes.string,
    posterPath: PropTypes.string,
    releaseDate: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    title: PropTypes.string,
    voteAverage: PropTypes.number,
    voteCount: PropTypes.number,
  }),
  fetchMoviesStart: PropTypes.func,
  submitSearch: PropTypes.func,
  setGenre: PropTypes.func,
  selectSortBy: PropTypes.func,
  selectMovie: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
