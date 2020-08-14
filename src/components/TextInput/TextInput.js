import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import "./TextInput.scss";
import { useFormContext } from "react-hook-form";

const TextInput = ({
  value,
  onChange,
  label,
  name,
  validationText,
  maxLength,
}) => {
  const { register, errors } = useFormContext();

  const hasErrors = errors[name];

  const labelText = `${label}:`;

  return (
    <div className="edit-place__form-item input-default">
      <label className="input-default__label" htmlFor={name}>
        {labelText}
      </label>
      <input
        name={name}
        ref={register({ required: true, maxLength })}
        className={classNames("input-default__input", {
          "input-default_invalid": hasErrors,
        })}
        type="text"
        value={value}
        onChange={onChange}
      />
      <p className="input-default__val-text">{hasErrors && validationText}</p>
    </div>
  );
};

export default TextInput;

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  validationText: PropTypes.string,
};

TextInput.defaultProps = {
  value: "",
  onChange: null,
  label: "Поле для ввода",
  maxLength: null,
  validationText: "",
};
