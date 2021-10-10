import React from "react";
import PropTypes from "prop-types";

import MovieListItem from "../movieListItem";

import "./movieList.css";

const MovieList = ({
  movies,
  handleEditMovie,
  handleDeleteMovie,
  handleSelectMovie,
}) => (
  <div className="MovieList">
    {movies.map((movie) => {
      const { id, genres, releaseDate, title, posterPath } = movie;
      return (
        <MovieListItem
          key={id}
          id={id}
          genres={genres}
          releaseDate={releaseDate}
          title={title}
          posterPath={posterPath}
          handleEditMovie={handleEditMovie}
          handleDeleteMovie={handleDeleteMovie}
          handleSelectMovie={handleSelectMovie}
        />
      );
    })}
  </div>
);

MovieList.propTypes = {
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
  handleEditMovie: PropTypes.func,
  handleDeleteMovie: PropTypes.func,
  handleSelectMovie: PropTypes.func,
};

export default MovieList;
