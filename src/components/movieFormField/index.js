import React from "react";
import PropTypes from "prop-types";

import MovieFormInput from "../movieFormInput";
import GenreMultiSelect from "../genreMultiSelect";
import OverviewTextarea from "../overviewTextarea";

import "./movieFormField.css";

const MovieFormField = ({ onChange, name, value, text }) => {
  let component;
  if (name === "genre") {
    component = (
      <GenreMultiSelect onChange={onChange} name={name} value={value} />
    );
  } else if (name === "overview") {
    component = (
      <OverviewTextarea onChange={onChange} name={name} value={value} />
    );
  } else {
    component = (
      <MovieFormInput onChange={onChange} name={name} value={value} />
    );
  }
  return (
    <div className="MovieFormField">
      <label className="MovieFormField-Name" htmlFor={name}>
        {text}
      </label>
      {component}
    </div>
  );
};

MovieFormField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ]),
  text: PropTypes.string,
};

export default MovieFormField;
