import React from "react";
import PropTypes from "prop-types";

import { getGenreList } from "../../utils";

import GenreItem from "../genreItem";

import "./genreToggle.css";

const GenreToggle = ({ handleSelectGenre, genre }) => {
  const getSelectedGenre = (selectedGenre) =>
    selectedGenre === genre && "selectedGenre";

  return (
    <ul className="genreList">
      {getGenreList(true).map((genre) => (
        <GenreItem
          key={genre.id}
          genre={genre}
          handleSelectGenre={handleSelectGenre}
          getSelectedGenre={getSelectedGenre}
        />
      ))}
    </ul>
  );
};

GenreToggle.propTypes = {
  handleSelectGenre: PropTypes.func,
  genre: PropTypes.string,
};

export default GenreToggle;
