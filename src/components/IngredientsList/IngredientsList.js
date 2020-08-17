import React from "react";
import classNames from "classnames";
import "./IngredientsList.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  onCreateModalClose,
  onCreateModalShow,
  onIngredientsAdd,
  onIngredientSelect,
} from "../../store/ingredient/actions";
import Modal from "../Modal";
import IngredientCreateForm from "../IngredientCreateForm";

const IngredientsList = () => {
  const dispatch = useDispatch();
  const { ingredientsList, createModalOpened } = useSelector(
    (state) => state.ingredient
  );

  const { placeId } = useSelector((state) => state.place);
  const { id: dishId } = useSelector((state) => state.dish);

  const onIngredientClick = (ingredientId) => {
    dispatch(onIngredientSelect(ingredientsList, ingredientId));
  };

  return (
    <>
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
      <div className="ingredients-buttons">
        <button
          type="button"
          className="btn ingredients-buttons__add"
          onClick={() => {
            dispatch(onIngredientsAdd(ingredientsList, dishId, placeId));
          }}
        >
          Добавить выбранные ингредиенты
        </button>
        <button
          type="button"
          className="btn ingredients-buttons__create"
          onClick={() => dispatch(onCreateModalShow())}
        >
          Создать новый ингредиент
        </button>
      </div>
      <Modal
        opened={createModalOpened}
        onClose={() => dispatch(onCreateModalClose())}
      >
        <IngredientCreateForm />
      </Modal>
    </>
  );
};

export default IngredientsList;
