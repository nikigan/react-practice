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

  return (
    <div className="edit-place__form-item text-input">
      <label className="text-input__label" htmlFor={name}>{`${label}:`}</label>
      <input
        name={name}
        ref={register({ required: true, maxLength })}
        className={classNames("text-input__input", {
          "text-input_invalid": errors[`${name}`],
        })}
        type="text"
        value={value}
        onChange={onChange}
      />
      <p className="text-input__val-text">
        {errors[`${name}`] && validationText}
      </p>
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
