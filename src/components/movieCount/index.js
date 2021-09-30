import React from "react";
import PropTypes from "prop-types";

import "./movieCount.css";

const MovieCount = ({ count }) => (
  <p className="MovieCount">
    <span className="MovieCount-Number">{count}</span> movies found
  </p>
);

MovieCount.propTypes = {
  count: PropTypes.number,
};

export default MovieCount;
