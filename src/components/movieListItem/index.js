import React from "react";
import PropTypes from "prop-types";

import MovieListItemMenu from "../movieListItemMenu";
import GenresDescription from "../genresDescription";

import "./movieListItem.css";

const MovieListItem = ({
  genres,
  releaseDate,
  title,
  posterPath,
  handleEditMovie,
  handleDeleteMovie,
  handleSelectMovie,
  id,
}) => (
  <div
    className="MovieListItem"
    onClick={() => {
      handleSelectMovie(id);
    }}
  >
    <div
      style={{
        backgroundImage: `url(${posterPath})`,
      }}
      className="MovieListItem-Container"
    >
      <MovieListItemMenu
        id={id}
        handleEditMovie={handleEditMovie}
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
    <div className="MovieListItem-Details">
      <span className="MovieListItem-Details-Title">{title}</span>
      <span className="MovieListItem-Details-Date">
        {releaseDate.slice(0, 4)}
      </span>
    </div>
    <GenresDescription genres={genres} />
  </div>
);

MovieListItem.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
  ),
  releaseDate: PropTypes.string,
  title: PropTypes.string,
  posterPath: PropTypes.string,
  handleEditMovie: PropTypes.func,
  handleDeleteMovie: PropTypes.func,
  id: PropTypes.number,
  handleSelectMovie: PropTypes.func,
};

export default MovieListItem;
