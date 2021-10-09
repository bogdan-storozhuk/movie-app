import React from "react";
import PropTypes from "prop-types";

import MovieList from "../movieList";
import ControlPanel from "../controlPanel";
import MovieCount from "../movieCount";
import ErrorBoundry from "../errorBoundry";

import WithLoading from "../../hoc/withLoading";

import "./mainContent.css";

const MovieListWithLoading = WithLoading(MovieList);

const MainContent = ({
  movies,
  genre,
  isLoading,
  handleEditMovie,
  handleDeleteMovie,
  handleSelectGenre,
}) => (
  <div className="MainContent">
    <ControlPanel handleSelectGenre={handleSelectGenre} genre={genre} />
    <MovieCount count={movies.length} />
    <ErrorBoundry>
      <MovieListWithLoading
        handleDeleteMovie={handleDeleteMovie}
        handleEditMovie={handleEditMovie}
        isLoading={isLoading}
        movies={movies}
      />
    </ErrorBoundry>
  </div>
);

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
  isLoading: PropTypes.bool,
  handleEditMovie: PropTypes.func,
  handleDeleteMovie: PropTypes.func,
  handleSelectGenre: PropTypes.func,
  genre: PropTypes.string,
};

export default MainContent;
