import React from "react";
import PropTypes from "prop-types";

import "./movieFormInput.css";

const MovieFormInput = ({ onChange, name, value }) => (
  <input
    className="MovieFormInput"
    onChange={onChange}
    value={value}
    type="text"
    name={name}
    id={name}
  />
);

MovieFormInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MovieFormInput;
