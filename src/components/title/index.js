import React from "react";
import PropTypes from "prop-types";

import "./title.css";

const Title = ({ children }) => <h1 className="Title">{children}</h1>;

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
