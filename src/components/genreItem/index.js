import React from "react";
import PropTypes from "prop-types";

import "./genreItem.css";

const GenreItem = ({ genre, handleSelectGenre, getSelectedGenre }) => (
  <li onClick={() => handleSelectGenre(genre.name)} className="genreItem">
    <span className={`genreItemMessage ${getSelectedGenre(genre.name)}`}>
      {genre.name}
    </span>
  </li>
);

GenreItem.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  handleSelectGenre: PropTypes.func,
  getSelectedGenre: PropTypes.func,
};

export default GenreItem;
