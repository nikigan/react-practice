import { message } from "antd";
import "antd/es/message/style/css";
import { dish as dishActions } from "../actionTypes";
import dishService from "../../services/dishService";

const onDishFetch = (dishId) => async (dispatch) => {
  dispatch({
    type: dishActions.fetch.started,
  });

  try {
    const { data: dish } = await dishService.getDish(dishId);
    dispatch({
      type: dishActions.fetch.success,
      payload: dish,
    });
  } catch (error) {
    dispatch({
      type: dishActions.fetch.error,
      payload: error.message,
    });
  }
};

const onDishSave = (
  { name, image, price, placeId, ingredients },
  history
) => async (dispatch) => {
  dispatch({
    type: dishActions.save.started,
  });
  try {
    const { data } = await dishService.addDish(
      name,
      image,
      price,
      placeId,
      ingredients
    );
    dispatch({
      type: dishActions.save.success,
    });
    message.success("Данные сохранены");

    history.replace(`/owner/dishes/${data.id}`);
  } catch (error) {
    dispatch({
      type: dishActions.save.error,
      payload: error.message,
    });
    message.error(error.message);
  }
};

const onDishDelete = (dishId, history) => async (dispatch) => {
  try {
    await dishService.deleteDish(dishId);

    message.success("Блюдо удалено");
    history.goBack();
  } catch (error) {
    dispatch({
      type: dishActions.delete.error,
    });
    message.error(error.message);
  }
};

const onIngredientDelete = (
  deleteIngredientId,
  ingredients,
  placeId,
  dishId
) => async (dispatch) => {
  const newIngredients = ingredients.filter((i) => i.id !== deleteIngredientId);

  try {
    await dishService.editDish(
      null,
      null,
      null,
      placeId,
      newIngredients,
      dishId
    );

    dispatch({
      type: dishActions.ingredient.deleted,
      payload: deleteIngredientId,
    });

    message.success("Ингредиент удален");
  } catch (error) {
    dispatch({
      type: dishActions.delete.error,
    });
  }
};

const onDishEdit = ({
  dishId,
  name,
  image,
  price,
  placeId,
  ingredients,
}) => async (dispatch) => {
  dispatch({
    type: dishActions.save.started,
  });

  try {
    await dishService.editDish(
      name,
      image,
      price,
      placeId,
      ingredients,
      dishId
    );
    dispatch({
      type: dishActions.save.success,
    });
    message.success("Данные сохранены");
  } catch (error) {
    dispatch({
      type: dishActions.save.error,
      payload: error.message,
    });
    message.error(error.message);
  }
};

const onDishClosed = () => (dispatch) => {
  dispatch({
    type: dishActions.closed,
  });
};

const onImageChange = (image) => (dispatch) => {
  dispatch({
    type: dishActions.image.changed,
    payload: image,
  });
};

const onInputChange = (event) => (dispatch) => {
  dispatch({
    type: dishActions.input.changed,
    payload: event.target,
  });
};

export {
  onDishFetch,
  onImageChange,
  onInputChange,
  onDishSave,
  onDishEdit,
  onDishClosed,
  onDishDelete,
  onIngredientDelete,
};
