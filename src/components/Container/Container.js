import PropTypes from "prop-types";
import React from "react";
import "./Container.scss";

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.element,
};

Container.defaultProps = {
  children: null,
};
