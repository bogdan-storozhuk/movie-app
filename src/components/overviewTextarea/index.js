import React from "react";
import PropTypes from "prop-types";

import "./overviewTextarea.css";

const OverviewTextarea = ({ handleChange, handleBlur, name, value }) => (
  <textarea
    className="OverviewTextarea"
    onChange={handleChange}
    onBlur={handleBlur}
    value={value}
    type="text"
    name={name}
    id={name}
  />
);

OverviewTextarea.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default OverviewTextarea;
