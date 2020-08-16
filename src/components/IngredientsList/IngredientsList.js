/* eslint-disable react/prop-types */
import React from "react";
import classNames from "classnames";
import "./IngredientsList.scss";
import { useDispatch, useSelector } from "react-redux";
import { onIngredientSelect } from "../../store/ingredient/actions";

const IngredientsList = () => {
  const dispatch = useDispatch();
  const { ingredientsList } = useSelector((state) => state.ingredient);

  const onIngredientClick = (ingredientId) => {
    dispatch(onIngredientSelect(ingredientsList, ingredientId));
  };

  return (
    <div className="ingredients-list">
      {ingredientsList.map((ing) => (
        <button
          type="button"
          key={ing.id}
          className={classNames("ingredients-list__item", {
            "ingredients-list__item_selected": ing.selected,
          })}
          onClick={() => onIngredientClick(ing.id)}
        >
          {ing.name}
        </button>
      ))}
    </div>
  );
};

export default IngredientsList;
