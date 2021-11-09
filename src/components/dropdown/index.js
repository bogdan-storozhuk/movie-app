import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import { sortByList } from "../../assets/constants";
import { sortBySelector } from "../../reducers/movies/selectors";

import { modifyQueryParamInSearch } from "../../utils";

import "./dropdown.css";

const DropDown = ({ sortBy }) => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handleSelectSortBy = (e) => {
    const newSearch = modifyQueryParamInSearch(
      search,
      "sortBy",
      e.target.value
    );
    navigate({
      pathname: pathname,
      search: `?${newSearch}`,
    });
  };

  return (
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
};

const mapStateToProps = createStructuredSelector({
  sortBy: sortBySelector,
});

DropDown.propTypes = {
  sortBy: PropTypes.string,
};

export default connect(mapStateToProps)(DropDown);
