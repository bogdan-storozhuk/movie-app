import React, { useState } from "react";
import PropTypes from "prop-types";

import "./genreToggle.css";

import GenreItem from "../genreItem";

const GenreToggle = ({ genreList }) => {
  const [index, setIndex] = useState(0);

  const onSelect = (index) => setIndex(index);

  const getSelectedGenre = (id) => id === index && "selectedGenre";

  return (
    <ul className="genreList">
      {genreList.map((genre) => (
        <GenreItem
          key={genre.id}
          genre={genre}
          onSelect={onSelect}
          getSelectedGenre={getSelectedGenre}
        />
      ))}
    </ul>
  );
};

GenreToggle.propTypes = {
  genreList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default GenreToggle;
