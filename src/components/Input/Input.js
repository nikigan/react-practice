import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";
import classNames from "classnames";

const Input = React.forwardRef(
  ({ name, type, errorMessage, errors, className }, ref) => {
    const inputStyle = classNames("input", className, {
      input_error: errors[name],
    });
    return (
      <>
        <input name={name} type={type} ref={ref} className={inputStyle} />
        <p className="input__error">{errors[name] && errorMessage}</p>
      </>
    );
  }
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  errors: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
};

Input.defaultProps = {
  errorMessage: "",
  errors: null,
  className: "",
};

export default Input;
