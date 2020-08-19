import PropTypes from "prop-types";
import React from "react";
import "./Dish.scss";

const Dish = ({ dish }) => {
  const { name, photo: image, calories, price } = dish;

  return (
    <div className="dish shadow">
      <img src={image} className="dish__image" alt={name} />
      <div className="dish__desc">
        <span className="dish__text-line dish__name">{name}</span>
        <span className="dish__text-line dish__calories">{`${calories} ккал`}</span>
        <span className="dish__text-line dish__price">{`${price} рублей`}</span>
      </div>
    </div>
  );
};

export default Dish;

Dish.propTypes = {
  dish: PropTypes.objectOf(PropTypes.any).isRequired,
};
