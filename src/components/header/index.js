import React, { memo } from "react";
import PropTypes from "prop-types";

import Logo from "../logo";
import AddMovieButton from "../addMovieButton";
import SearchForm from "../searchForm";
import MovieDetails from "../movieDetails";
import SearchButton from "../searchButton";

import "./header.css";

const Header = ({
  handleAddNewMovie,
  handleSubmitSearch,
  handleSelectMovie,
  movie,
}) => (
  <>
    <div className="Background"></div>
    <div className="Header">
      <div className="Header-Panel">
        <Logo />
        {movie ? (
          <SearchButton handleSelectMovie={handleSelectMovie} />
        ) : (
          <AddMovieButton handleAddNewMovie={handleAddNewMovie} />
        )}
      </div>
      {movie ? (
        <MovieDetails movie={movie} />
      ) : (
        <SearchForm handleSubmitSearch={handleSubmitSearch} />
      )}
    </div>
  </>
);

Header.propTypes = {
  handleAddNewMovie: PropTypes.func,
  handleSubmitSearch: PropTypes.func,
  handleSelectMovie: PropTypes.func,
  movie: PropTypes.shape({
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
};

export default memo(Header);
