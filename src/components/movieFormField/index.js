import React from "react";
import PropTypes from "prop-types";

import MovieFormInput from "../movieFormInput";
import GenreMultiSelect from "../genreMultiSelect";
import OverviewTextarea from "../overviewTextarea";

import "./movieFormField.css";

const MovieFormField = ({
  handleChange,
  handleBlur,
  name,
  value,
  text,
  errors,
  touched,
}) => {
  let component;
  if (name === "genres") {
    component = (
      <GenreMultiSelect
        handleChange={handleChange}
        handleBlur={handleBlur}
        name={name}
        value={value}
      />
    );
  } else if (name === "overview") {
    component = (
      <OverviewTextarea
        handleChange={handleChange}
        handleBlur={handleBlur}
        name={name}
        value={value}
      />
    );
  } else {
    component = (
      <MovieFormInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        name={name}
        value={value}
      />
    );
  }
  return (
    <div className="MovieFormField">
      <label className="MovieFormField-Name" htmlFor={name}>
        {text}
      </label>
      {component}
      {errors[name] && touched[name] && (
        <div className="MovieFormField-Error">*{errors[name]}</div>
      )}
    </div>
  );
};

MovieFormField.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
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
  errors: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    posterPath: PropTypes.string,
    releaseDate: PropTypes.string,
    runtime: PropTypes.string,
    voteAverage: PropTypes.string,
  }),
  touched: PropTypes.shape({
    title: PropTypes.bool,
    overview: PropTypes.bool,
    posterPath: PropTypes.bool,
    releaseDate: PropTypes.bool,
    runtime: PropTypes.bool,
    voteAverage: PropTypes.bool,
  }),
};

export default MovieFormField;
