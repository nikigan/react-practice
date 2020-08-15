/* eslint-disable react/prop-types */
import React from "react";
import "./IngredientsList.scss";

const IngredientsList = ({ items }) => {
  return (
    <div className="ingredients-list">
      {items.map((ing) => (
        <div key={ing.id} className="ingredients-list__item">
          {ing.name}
        </div>
      ))}
    </div>
  );
};

export default IngredientsList;
