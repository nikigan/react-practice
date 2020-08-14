import PropTypes from "prop-types";
import React from "react";
import "./DishSelect.scss";
import { Link } from "react-router-dom";

// TODO: Рефактор компонента в обобщенный

const DishSelect = ({ label, dishes }) => {
  return (
    <div className="dish-select edit-place__form-item">
      <span className="dish-select__label">{label}</span>
      <div className="dish-select__container">
        {dishes.map((dish) => {
          return (
            <Link
              key={dish.id}
              className="dish-select__item"
              to={`/owner/dishes/${dish.id}`}
            >
              {dish.name}
            </Link>
          );
        })}
      </div>
      <Link
        type="button"
        className="btn dish-select__btn"
        to="/owner/dishes/new"
      >
        Добавить блюдо
      </Link>
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
