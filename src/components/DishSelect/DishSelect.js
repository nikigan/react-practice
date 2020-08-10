import PropTypes from "prop-types";
import React from "react";
import "./DishSelect.scss";

const DishSelect = ({ label, dishes }) => {
  return (
    <div className="dish-select edit-place__form-item">
      <span className="dish-select__label">{label}</span>
      <div className="dish-select__container">
        {dishes.map((dish) => {
          return (
            <span key={dish.id} className="dish-select__item">
              {dish.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default DishSelect;

DishSelect.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
};

DishSelect.defaultProps = {
  dishes: [],
  label: "Список",
};
