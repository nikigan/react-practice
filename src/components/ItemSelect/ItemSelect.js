import PropTypes from "prop-types";
import React from "react";
import "./DishSelect.scss";
import { Link } from "react-router-dom";

// TODO: Рефактор компонента в обобщенный

const ItemSelect = ({ label, items, path, buttonText }) => {
  return (
    <div className="dish-select edit-place__form-item">
      <span className="dish-select__label">{label}</span>
      <div className="dish-select__container">
        {items.map((item) => {
          return (
            <Link
              key={item.id}
              className="dish-select__item"
              to={`/owner/${path}/${item.id}`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <Link
        type="button"
        className="btn dish-select__btn"
        to="/owner/dishes/new"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default ItemSelect;

ItemSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  path: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

ItemSelect.defaultProps = {
  items: [],
  label: "Список",
  buttonText: "Добавить",
};
