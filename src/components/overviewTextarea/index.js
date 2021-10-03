import React from "react";
import PropTypes from "prop-types";

import "./overviewTextarea.css";

const OverviewTextarea = ({ onChange, name, value }) => (
  <textarea
    className="OverviewTextarea"
    onChange={onChange}
    value={value}
    type="text"
    name={name}
    id={name}
  />
);

OverviewTextarea.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default OverviewTextarea;
