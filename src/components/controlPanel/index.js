import React from "react";
import PropTypes from "prop-types";

import GenreToggle from "../genreToggle";
import DropDown from "../dropdown";

import "./controlPanel.css";

const ControlPanel = ({ handleSelectGenre, genre }) => (
  <div className="ControlPanel">
    <GenreToggle handleSelectGenre={handleSelectGenre} genre={genre} />
    <DropDown />
  </div>
);

ControlPanel.propTypes = {
  handleSelectGenre: PropTypes.func,
  genre: PropTypes.string,
};

export default ControlPanel;
