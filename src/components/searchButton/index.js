import React from "react";
import PropTypes from "prop-types";

import SearchImage from "../../assets/img/search.svg";

import "./searchButton.css";

const SearchButton = ({ handleSelectMovie }) => (
  <button className="SearchButton" onClick={() => handleSelectMovie(null)}>
    <div className="SearchButton-Icon">
      <SearchImage />
    </div>
  </button>
);

SearchButton.propTypes = {
  handleAddNewMovie: PropTypes.func,
};

export default SearchButton;
