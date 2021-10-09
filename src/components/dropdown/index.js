import React from "react";

import { sortByList } from "../../assets/constants";

import "./dropdown.css";

const DropDown = () => (
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

export default DropDown;
