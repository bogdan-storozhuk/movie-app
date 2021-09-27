import React from "react";

import GenreToggle from "../genreToggle";
import DropDown from "../dropdown";

import genreList from "../../assets/constants/genreList";
import sortByList from "../../assets/constants/sortByList";

import "./controlPanel.css";

const ControlPanel = () => (
  <div className="ControlPanel">
    <GenreToggle genreList={genreList} />
    <DropDown sortByList={sortByList} />
  </div>
);

export default ControlPanel;
