import React from "react";
import PropTypes from "prop-types";

import "./addMovieButton.css";

const AddMovieButton = ({ openAddMovieModal }) => (
  <button onClick={openAddMovieModal} className="AddMovieButton">
    + ADD MOVIE
  </button>
);

AddMovieButton.propTypes = {
  openAddMovieModal: PropTypes.func,
};

export default AddMovieButton;
