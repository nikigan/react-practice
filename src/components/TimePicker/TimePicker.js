import PropTypes from "prop-types";
import React from "react";
import { TimePicker as tp } from "antd";
import moment from "moment";
import "./TimePicker.scss";

const TimePicker = ({ label, onChange, fromHour, toHour }) => {
  const { RangePicker } = tp;

  return (
    <div className="time-picker edit-place__form-item">
      <span className="time-picker__label">{label}</span>
      <RangePicker
        picker="time"
        placeholder={["Время открытия", "Время закрытия"]}
        className="time-picker__picker"
        onChange={onChange}
        allowClear={false}
        value={[moment(fromHour, "HH:mm:ss"), moment(toHour, "HH:mm:ss")]}
      />
    </div>
  );
};

export default TimePicker;

TimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fromHour: PropTypes.string,
  toHour: PropTypes.string,
};

TimePicker.defaultProps = {
  fromHour: "09:00:00",
  toHour: "20:00:00",
};
