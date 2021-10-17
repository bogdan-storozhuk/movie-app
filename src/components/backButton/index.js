import React from "react";
import PropTypes from "prop-types";

import SearchImage from "../../assets/img/search.svg";

import "./backButton.css";

const BackButton = ({ resetMovie }) => (
  <button className="SearchButton" onClick={() => resetMovie()}>
    <div className="SearchButton-Icon">
      <SearchImage />
    </div>
  </button>
);

BackButton.propTypes = {
  resetMovie: PropTypes.func,
};

export default BackButton;
