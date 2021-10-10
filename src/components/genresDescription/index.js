import React from "react";
import PropTypes from "prop-types";

import { getFormatedGenresDescription } from "../../utils";

import "./genresDescription.css";

const GenresDescription = ({ genres }) => (
  <p className="GenresDescription">{getFormatedGenresDescription(genres)}</p>
);

GenresDescription.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

export default GenresDescription;
