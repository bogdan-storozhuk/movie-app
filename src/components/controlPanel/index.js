import React from "react";
import PropTypes from "prop-types";

import GenreToggle from "../genreToggle";
import DropDown from "../dropdown";

import "./controlPanel.css";

const ControlPanel = ({
  handleSelectGenre,
  genre,
  handleSelectSortBy,
  sortBy,
}) => (
  <div className="ControlPanel">
    <GenreToggle handleSelectGenre={handleSelectGenre} genre={genre} />
    <DropDown handleSelectSortBy={handleSelectSortBy} sortBy={sortBy} />
  </div>
);

ControlPanel.propTypes = {
  handleSelectGenre: PropTypes.func,
  handleSelectSortBy: PropTypes.func,
  genre: PropTypes.string,
  sortBy: PropTypes.string,
};

export default ControlPanel;
