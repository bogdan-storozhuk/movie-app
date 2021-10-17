import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import { sortByList } from "../../assets/constants";
import { selectSortBy } from "../../reducers/movies/actions";
import { sortBySelector } from "../../reducers/movies/selectors";

import "./dropdown.css";

const DropDown = ({ selectSortBy, sortBy }) => {
  const handleSelectSortBy = (e) => {
    selectSortBy(e.target.value);
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

function mapDispatchToProps(dispatch) {
  return {
    selectSortBy: (sortBy) => dispatch(selectSortBy(sortBy)),
  };
}

DropDown.propTypes = {
  handleSelectSortBy: PropTypes.func,
  sortBy: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
