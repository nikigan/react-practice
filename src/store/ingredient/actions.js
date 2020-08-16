import { message } from "antd";
import "antd/es/message/style/css";
import {
  ingredient as ingredientActions,
  dish as dishActions,
} from "../actionTypes";
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

const onIngredientSave = (name, calories) => async (dispatch) => {
  dispatch({
    type: ingredientActions.save.started,
  });
  try {
    await ingredientService.addIngredient(name, calories);
    dispatch({
      type: ingredientActions.save.success,
    });
    message.success("Данные сохранены");

    dispatch(onIngredientsFetch());
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

  try {
    const ingredients = await ingredientService.getIngredients();

    ingredients.map((item) => ({
      ...item,
      selected: false,
    }));

    dispatch({
      type: ingredientActions.fetch.success,
      payload: ingredients,
    });
  } catch (error) {
    dispatch({
      type: ingredientActions.fetch.error,
    });
    message.error(error.message);
  }
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

const onIngredientsAdd = (ingredients) => (dispatch) => {
  const newIngredients = ingredients.filter((i) => i.selected);

  dispatch({
    type: dishActions.ingredient.fetched,
    payload: newIngredients,
  });

  dispatch({
    type: ingredientActions.modal.closed,
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

const onCreateModalShow = () => (dispatch) => {
  dispatch({
    type: ingredientActions.createModal.opened,
  });
};

const onCreateModalClose = () => (dispatch) => {
  dispatch({
    type: ingredientActions.createModal.closed,
  });
};

export {
  onIngredientSave,
  onIngredientsFetch,
  onInputChange,
  onIngredientSelect,
  onIngredientModalShow,
  onIngredientModalClose,
  onIngredientsAdd,
  onCreateModalShow,
  onCreateModalClose,
};
