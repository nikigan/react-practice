import React from "react";
import "./IngredientCreateForm.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { onIngredientSave } from "../../store/ingredient/actions";

const IngredientCreateForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    dispatch(onIngredientSave(data.name, data.calories));
  };

  return (
    <form
      className="ingredient-create-form"
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="ingredient-create-form__input-block">
        <label
          className="ingredient-create-form__label"
          htmlFor="ingredientName"
        >
          Название:
        </label>
        <input
          className="ingredient-create-form__input"
          name="name"
          id="ingredientName"
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <div className="ingredient-create-form__input-block">
        <label
          className="ingredient-create-form__label"
          htmlFor="ingredientCalories"
        >
          Калорийность:
        </label>
        <input
          className="ingredient-create-form__input"
          name="calories"
          id="ingredientCalories"
          type="number"
          min="1"
          ref={register({ required: true })}
        />
      </div>
      <button type="submit" className="btn ingredient-create-form__btn">
        Ок
      </button>
    </form>
  );
};

export default IngredientCreateForm;
