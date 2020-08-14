import React from "react";
import "./NumberInput.scss";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

const NumberInput = ({ value, onChange, label, name, validationText }) => {
  const { register, errors } = useFormContext();

  const hasErrors = errors[name];

  return (
    <div className="edit-place__form-item input-default">
      <label
        className="input-default__label"
        htmlFor={name}
      >{`${label}:`}</label>
      <input
        name={name}
        ref={register({ required: true })}
        className={classNames("input-default__input", {
          "text-input_invalid": hasErrors,
        })}
        type="number"
        step="0.1"
        min="1"
        value={value}
        onChange={onChange}
      />
      <p className="input-default__val-text">{hasErrors && validationText}</p>
    </div>
  );
};

NumberInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  validationText: PropTypes.string,
};

NumberInput.defaultProps = {
  value: 0,
  onChange: null,
  label: "Поле для ввода",
  validationText: "",
};

export default NumberInput;
