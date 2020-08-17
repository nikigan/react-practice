import PropTypes from "prop-types";
import React from "react";
import "./ItemSelect.scss";

const ItemSelect = ({ label, items, onItemClick, buttonText, onNewClick }) => {
  return (
    <div className="item-select edit-place__form-item">
      <span className="item-select__label">{label}</span>
      <div className="item-select__container">
        {items.map((item) => {
          return (
            <button
              type="button"
              key={item.id}
              className="item-select__item"
              onClick={() => onItemClick(item.id)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className="btn item-select__btn"
        onClick={onNewClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ItemSelect;

ItemSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  buttonText: PropTypes.string,
  onItemClick: PropTypes.func,
  onNewClick: PropTypes.func,
};

ItemSelect.defaultProps = {
  items: [],
  label: "Список",
  buttonText: "Добавить",
  onItemClick: null,
  onNewClick: null,
};
