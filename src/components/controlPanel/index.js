import React from "react";

import GenreToggle from "../genreToggle";
import DropDown from "../dropdown";

import "./controlPanel.css";

const ControlPanel = () => (
  <div className="ControlPanel">
    <GenreToggle />
    <DropDown />
  </div>
);

export default ControlPanel;
