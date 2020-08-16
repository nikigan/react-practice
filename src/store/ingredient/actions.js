import { message } from "antd";
import "antd/es/message/style/css";
import { ingredient as ingredientActions } from "../actionTypes";
import ingredientService from "../../services/ingredientService";

const onIngredientsFetch = () => async (dispatch) => {
  dispatch({
    type: ingredientActions.fetch.started,
  });

  try {
    const ingredients = await ingredientService.getIngredients();
    dispatch({
      type: ingredientActions.fetch.success,
      payload: ingredients,
    });
  } catch (error) {
    dispatch({
      type: ingredientActions.fetch.error,
      payload: error.message,
    });
  }
};

const onIngredientSave = ({ name, calories }) => async (dispatch) => {
  dispatch({
    type: ingredientActions.save.started,
  });
  try {
    await ingredientService.addDish(name, calories);
    dispatch({
      type: ingredientActions.save.success,
    });
    message.success("Данные сохранены");
  } catch (error) {
    dispatch({
      type: ingredientActions.save.error,
      payload: error.message,
    });
    message.error(error.message);
  }
};

const onIngredientModalShow = () => async (dispatch) => {
  dispatch({
    type: ingredientActions.modal.opened,
  });

  const ingredients = await ingredientService.getIngredients();

  ingredients.map((item) => ({ ...item, selected: false }));

  dispatch({
    type: ingredientActions.fetch.success,
    payload: ingredients,
  });
};

const onIngredientSelect = (ingredients, ingredientId) => (dispatch) => {
  const changedIngredient = ingredients.filter((i) => i.id === ingredientId)[0];
  const idx = ingredients.indexOf(changedIngredient);

  changedIngredient.selected = !changedIngredient.selected;

  dispatch({
    type: ingredientActions.selected,
    payload: [
      ...ingredients.slice(null, idx),
      changedIngredient,
      ...ingredients.slice(idx + 1, ingredients.length),
    ],
  });
};

const onIngredientModalClose = () => (dispatch) => {
  dispatch({
    type: ingredientActions.modal.closed,
  });
};

const onInputChange = (event) => (dispatch) => {
  dispatch({
    type: ingredientActions.input.changed,
    payload: event.target,
  });
};

export {
  onIngredientSave,
  onIngredientsFetch,
  onInputChange,
  onIngredientSelect,
  onIngredientModalShow,
  onIngredientModalClose,
};
