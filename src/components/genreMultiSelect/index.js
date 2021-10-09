import React from "react";
import { Multiselect } from "multiselect-react-dropdown";
import PropTypes from "prop-types";

import { getGenreList } from "../../utils";

import "./genreMultiSelect.css";

const GenreMultiSelect = ({ onChange, name, value }) => (
  <div className="GenreMultiSelect">
    <Multiselect
      options={getGenreList()}
      displayValue="name"
      showCheckbox={true}
      selectedValues={value}
      onSelect={onChange}
      onRemove={onChange}
      placeholder="Select Genre"
      showArrow
      name={name}
    />
  </div>
);

GenreMultiSelect.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
  ),
};

export default GenreMultiSelect;
