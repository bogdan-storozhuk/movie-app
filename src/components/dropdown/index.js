import React from "react";
import PropTypes from "prop-types";

import "./dropdown.css";

const DropDown = ({ sortByList }) => (
  <div className="DropDown">
    <label className="DropDown-Label" htmlFor="SortSelect">
      SORT BY
    </label>
    <div className="DropDown-SelectBox">
      <select className="DropDown-Select" id="SortSelect">
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
  sortByList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      message: PropTypes.string,
    })
  ),
};

export default DropDown;
