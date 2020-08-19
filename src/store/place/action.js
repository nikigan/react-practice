import { message } from "antd";
import "antd/es/message/style/css";
import placesService from "../../services/placesService";
import { place as placeActions } from "../actionTypes";
import dishService from "../../services/dishService";
import { setDistanceAndOpened } from "../../utils/placesUtils";

const onPlaceFetch = (placeId) => async (dispatch) => {
  dispatch({
    type: placeActions.fetch.started,
  });

  try {
    const { data: place } = await placesService.getPlace(placeId);

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const newPlace = setDistanceAndOpened(place, coords);

      dispatch({
        type: placeActions.fetch.success,
        payload: { placeId, ...newPlace },
      });
    });
  } catch (error) {
    dispatch({
      type: placeActions.fetch.error,
      payload: error.message,
    });
  }
};

const onDishesFetch = (placeId) => async (dispatch) => {
  const { data: dishes } = await dishService.getDishes(placeId);
  dispatch({
    type: placeActions.dishes.fetched,
    payload: dishes,
  });
};

const onPlaceSave = (
  { name, image, fromHour, toHour, address },
  history
) => async (dispatch) => {
  dispatch({
    type: placeActions.save.started,
  });
  try {
    const { data } = await placesService.addPlace(
      name,
      image,
      fromHour,
      toHour,
      address
    );
    dispatch({
      type: placeActions.save.success,
    });
    message.success("Данные сохранены");
    history.replace(`/owner/places/${data.id}`);
  } catch (error) {
    dispatch({
      type: placeActions.save.error,
      payload: error.message,
    });
    message.error(error.message);
  }
};

const onPlaceDelete = (placeId, history) => async (dispatch) => {
  try {
    await placesService.deletePlace(placeId);

    message.success("Заведение удалено");
    history.replace("/owner/places");
  } catch (error) {
    dispatch({
      type: placeActions.delete.error,
    });
    message.error(error.message);
  }
};

const onPlaceEdit = ({
  placeId,
  name,
  image,
  fromHour,
  toHour,
  address,
}) => async (dispatch) => {
  dispatch({
    type: placeActions.save.started,
  });

  try {
    await placesService.editPlace(
      placeId,
      name,
      image,
      fromHour,
      toHour,
      address
    );
    dispatch({
      type: placeActions.save.success,
    });
    message.success("Данные сохранены");
  } catch (error) {
    dispatch({
      type: placeActions.save.error,
      payload: error.message,
    });
    message.error(error.message);
  }
};

const onPlaceClosed = () => (dispatch) => {
  dispatch({
    type: placeActions.closed,
  });
};

const onImageChange = (image) => (dispatch) => {
  dispatch({
    type: placeActions.image.changed,
    payload: image,
  });
};

const onInputChange = (event) => (dispatch) => {
  dispatch({
    type: placeActions.input.changed,
    payload: event.target,
  });
};

const onTimeChanged = (fromHour, toHour) => (dispatch) => {
  dispatch({
    type: placeActions.time.changed,
    payload: { fromHour, toHour },
  });
};

export {
  onPlaceFetch,
  onImageChange,
  onInputChange,
  onTimeChanged,
  onPlaceSave,
  onPlaceEdit,
  onPlaceClosed,
  onPlaceDelete,
  onDishesFetch,
};
