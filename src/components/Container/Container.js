import React from "react";
import "./Container.scss";

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
