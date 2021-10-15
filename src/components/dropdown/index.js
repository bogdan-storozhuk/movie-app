import React from "react";
import PropTypes from "prop-types";

import { sortByList } from "../../assets/constants";

import "./dropdown.css";

const DropDown = ({ handleSelectSortBy, sortBy }) => (
  <div className="DropDown">
    <label className="DropDown-Label" htmlFor="SortSelect">
      SORT BY
    </label>
    <div className="DropDown-SelectBox">
      <select
        value={sortBy}
        onChange={handleSelectSortBy}
        className="DropDown-Select"
        id="SortSelect"
      >
        {sortByList.map(({ value, message, id }) => (
          <option key={id} value={value}>
            {message}
          </option>
        ))}
      </select>
    </div>
  </div>
);

DropDown.propTypes = {
  handleSelectSortBy: PropTypes.func,
  sortBy: PropTypes.string,
};

export default DropDown;
