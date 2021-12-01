import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import GenreItem from "../genreItem";

import { getGenreList } from "../../utils";

import { genreSelector } from "../../reducers/movies/selectors";

import "./genreToggle.css";

export const GenreToggle = ({ selectedGenre }) => {
  const highlightGenreIfSelected = (genre) =>
    selectedGenre === genre && "selectedGenre";

  return (
    <ul className="genreList">
      {getGenreList(true).map((genre) => (
        <GenreItem
          key={genre.id}
          genre={genre}
          highlightGenreIfSelected={highlightGenreIfSelected}
        />
      ))}
    </ul>
  );
};

GenreToggle.propTypes = {
  selectedGenre: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  selectedGenre: genreSelector,
});

export default connect(mapStateToProps)(GenreToggle);
