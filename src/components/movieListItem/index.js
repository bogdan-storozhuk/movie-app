import React from "react";
import PropTypes from "prop-types";

import MovieListItemMenu from "../movieListItemMenu";

import { getFormatedGenresDescription } from "../../utils";

import "./movieListItem.css";

const MovieListItem = ({ genres, release_date, title, poster_path }) => {
  return (
    <div className="MovieListItem">
      <div
        style={{
          backgroundImage: `url(${poster_path})`,
        }}
        className="MovieListItem-Container"
      >
        <MovieListItemMenu />
      </div>
      <div className="MovieListItem-Details">
        <span className="MovieListItem-Details-Title">{title}</span>
        <span className="MovieListItem-Details-Date">
          {release_date.slice(0, 4)}
        </span>
      </div>
      <p className="MovieListItem-Genres">
        {getFormatedGenresDescription(genres)}
      </p>
    </div>
  );
};

MovieListItem.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
};

export default MovieListItem;
