import React from "react";
import PropTypes from "prop-types";

import "./addMovieButton.css";

const AddMovieButton = ({ handleAddNewMovie }) => (
  <button onClick={handleAddNewMovie} className="AddMovieButton">
    + ADD MOVIE
  </button>
);

AddMovieButton.propTypes = {
  handleAddNewMovie: PropTypes.func,
};

export default AddMovieButton;
