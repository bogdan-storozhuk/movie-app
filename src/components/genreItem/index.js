import React from "react";
import PropTypes from "prop-types";

import "./genreItem.css";

const GenreItem = ({ genre, onSelect, getSelectedGenre }) => (
  <li onClick={() => onSelect(genre.id)} className="genreItem">
    <span className={`genreItemMessage ${getSelectedGenre(genre.id)}`}>
      {genre.name}
    </span>
  </li>
);

GenreItem.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number,
    getSelectedGenre: PropTypes.func,
    onSelect: PropTypes.func,
  }),
};

export default GenreItem;
