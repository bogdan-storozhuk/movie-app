import React from "react";

const GenreItem = ({genre, onSelect, getSelectedGenre}) => {
  return (
    <li
    onClick={() => onSelect(genre.id)}
    className="genreItem"
  >
    <span
      className={`genreItemMessage ${getSelectedGenre(genre.id)}`}
    >
      {genre.name}
    </span>
  </li>
  );
};

export default GenreItem;
