import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import MovieList from "../movieList";
import ControlPanel from "../controlPanel";
import MovieCount from "../movieCount";
import ErrorBoundry from "../errorBoundry";

import WithLoading from "../../hoc/withLoading";

import {
  moviesSelector,
  loadingSelector,
  errorSelector,
  genreSelector,
  searchSelector,
  sortBySelector,
} from "../../reducers/movies/selectors";
import { fetchMoviesStart } from "../../reducers/movies/actions";

import "./mainContent.css";

const MovieListWithLoading = WithLoading(MovieList);

const MainContent = ({
  movies,
  genre,
  sortBy,
  fetchMoviesStart,
  loading,
  search,
}) => {
  useEffect(() => {
    fetchMoviesStart({ genre, search, sortBy });
  }, [genre, search, sortBy]);
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
});

function mapDispatchToProps(dispatch) {
  return {
    fetchMoviesStart: (genre) => dispatch(fetchMoviesStart(genre)),
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
  loading: PropTypes.bool,
  genre: PropTypes.string,
  search: PropTypes.string,
  sortBy: PropTypes.string,
  fetchMoviesStart: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
