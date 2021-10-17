import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MovieListItemMenu from "../movieListItemMenu";
import GenresDescription from "../genresDescription";

import { selectMovie } from "../../reducers/movies/actions";

import "./movieListItem.css";

const MovieListItem = ({
  genres,
  releaseDate,
  title,
  posterPath,
  id,
  selectMovie,
}) => (
  <div
    className="MovieListItem"
    onClick={() => {
      selectMovie(id);
    }}
  >
    <div
      style={{
        backgroundImage: `url(${posterPath})`,
      }}
      className="MovieListItem-Container"
    >
      <MovieListItemMenu id={id} />
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

function mapDispatchToProps(dispatch) {
  return {
    selectMovie: (id) => dispatch(selectMovie(id)),
  };
}

MovieListItem.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
  ),
  releaseDate: PropTypes.string,
  title: PropTypes.string,
  posterPath: PropTypes.string,
  id: PropTypes.number,
  selectMovie: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(MovieListItem);
