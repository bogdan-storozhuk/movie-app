import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import GenreItem from "../genreItem";

import { getGenreList } from "../../utils";

import { genreSelector } from "../../reducers/movies/selectors";
import { setGenre } from "../../reducers/movies/actions";

import "./genreToggle.css";

const GenreToggle = ({ setGenre, genre }) => {
  const getSelectedGenre = (selectedGenre) =>
    selectedGenre === genre && "selectedGenre";

  return (
    <ul className="genreList">
      {getGenreList(true).map((genre) => (
        <GenreItem
          key={genre.id}
          genre={genre}
          setGenre={setGenre}
          getSelectedGenre={getSelectedGenre}
        />
      ))}
    </ul>
  );
};

GenreToggle.propTypes = {
  genre: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  genre: genreSelector,
});

function mapDispatchToProps(dispatch) {
  return {
    setGenre: (genre) => dispatch(setGenre(genre)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreToggle);
