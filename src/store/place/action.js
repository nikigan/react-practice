import { message } from "antd";
import "antd/es/message/style/css";
import placesService from "../../services/placesService";
import history from "../../index";

const onPlaceFetch = (placeId) => async (dispatch) => {
  dispatch({
    type: "PLACE_FETCH_STARTED",
  });

  try {
    const place = await placesService.getPlace(placeId);
    dispatch({
      type: "PLACE_FETCH_SUCCESS",
      payload: place,
    });
  } catch (error) {
    dispatch({
      type: "PLACE_FETCH_ERROR",
      payload: error.message,
    });
  }
};

const onPlaceSave = (name, image, fromHour, toHour, address) => async (
  dispatch
) => {
  dispatch({
    type: "PLACE_SAVE_STARTED",
  });
  try {
    await placesService.addPlace(name, image, fromHour, toHour, address);
    dispatch({
      type: "PLACE_SAVE_SUCCESS",
    });
    message.success("Данные сохранены");
  } catch (error) {
    dispatch({
      type: "PLACE_SAVE_ERROR",
      payload: error.message,
    });
    message.error(error.message);
  }
};

const onPlaceDelete = (placeId) => async (dispatch) => {
  try {
    await placesService.deletePlace(placeId);

    message.success("Заведение удалено");
    history.goBack();
  } catch (error) {
    dispatch({
      type: "PLACE_DELETE_ERROR",
    });
    message.error(error.message);
  }
};

const onPlaceEdit = (placeId, name, image, fromHour, toHour, address) => async (
  dispatch
) => {
  dispatch({
    type: "PLACE_SAVE_STARTED",
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
      type: "PLACE_SAVE_SUCCESS",
    });
    message.success("Данные сохранены");
  } catch (error) {
    dispatch({
      type: "PLACE_SAVE_ERROR",
      payload: error.message,
    });
    message.error(error.message);
  }
};

const onPlaceClosed = () => (dispatch) => {
  dispatch({
    type: "PLACE_CLOSED",
  });
};

const onImageChange = (image) => (dispatch) => {
  dispatch({
    type: "PLACE_IMAGE_CHANGED",
    payload: image,
  });
};

const onInputChange = (event) => (dispatch) => {
  dispatch({
    type: "PLACE_INPUT_CHANGED",
    payload: event.target,
  });
};

const onTimeChanged = (fromHour, toHour) => (dispatch) => {
  dispatch({
    type: "PLACE_TIME_CHANGED",
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
};
