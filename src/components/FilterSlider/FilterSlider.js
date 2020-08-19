import PropTypes from "prop-types";
import React from "react";
import "./FilterSlider.scss";
import { Slider } from "antd";
import "antd/es/slider/style/css";

const FilterSlider = ({ price, min, max, onChange }) => {
  return (
    <div className="filter-slider">
      <div className="filter-slider__text-block">
        <span className="filter-slider__text">Средний чек</span>
        <span className="filter-slider__price">{`до ${price} руб`}</span>
      </div>
      <Slider
        defaultValue={price}
        min={min}
        max={max}
        onAfterChange={onChange}
      />
    </div>
  );
};

export default FilterSlider;

FilterSlider.propTypes = {
  price: PropTypes.number,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

FilterSlider.defaultProps = {
  price: 50,
};
