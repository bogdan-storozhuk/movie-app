import React from "react";
import PropTypes from "prop-types";

import MovieListItem from "../movieListItem";

import "./movieList.css";

const MovieList = ({ movies }) => (
  <div className="MovieList">
    {movies.map((movie) => (
      <MovieListItem
        key={movie.id}
        genres={movie.genres}
        release_date={movie.release_date}
        title={movie.title}
        poster_path={movie.poster_path}
      />
    ))}
  </div>
);

MovieList.propTypes = {
  budget: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  tagline: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
};

export default MovieList;
