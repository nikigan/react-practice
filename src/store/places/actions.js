import placesService from "../../services/placesService";
import { places as placesActions } from "../actionTypes";
import { sortPlaces } from "../../utils/placesUtils";

const onPlacesFetch = (userId) => async (dispatch) => {
  dispatch({
    type: placesActions.fetch.started,
  });

  try {
    const { data: places } = await placesService.getAllPlaces(userId);

    dispatch({
      type: placesActions.fetch.success,
      payload: places,
    });
  } catch (error) {
    dispatch({
      type: placesActions.fetch.error,
      payload: error.message,
    });
  }
};

const onHomePlacesFetch = () => async (dispatch) => {
  dispatch({
    type: placesActions.fetch.started,
  });

  try {
    const { data: places } = await placesService.getAllPlaces();

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const placesList = sortPlaces(places, coords);

      dispatch({
        type: placesActions.fetch.success,
        payload: placesList,
      });
    });
  } catch (error) {
    dispatch({
      type: placesActions.fetch.error,
      payload: error.message,
    });
  }
};

const onControlPanelClose = () => (dispatch) => {
  dispatch({
    type: placesActions.close,
  });
};

export { onPlacesFetch, onControlPanelClose, onHomePlacesFetch };
