import PropTypes from "prop-types";
import React from "react";
import "./Error.scss";
import { Result } from "antd";
import "antd/es/result/style/css";

const Error = ({ message }) => {
  return (
    <Result status="error" title="Упс! Прозошла ошибочка!" subTitle={message} />
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: "",
};
