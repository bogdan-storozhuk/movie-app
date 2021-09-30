import React from "react";
import PropTypes from "prop-types";

function WithLoading(Component) {
  const LoadingIndicator = () => <h2>Loading...Please wait</h2>;

  return function WithLoadingComponent({ isLoading, ...props }) {
    return isLoading ? <LoadingIndicator /> : <Component {...props} />;
  };
}

WithLoading.propTypes = {
  Component: PropTypes.func,
};

export default WithLoading;
