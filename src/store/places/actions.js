import moment from "moment";
import { getDistance } from "geolib";
import placesService from "../../services/placesService";
import { places as placesActions } from "../actionTypes";

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
      const placesList = places
        .map((place) => {
          const distance = getDistance(
            {
              latitude: coords.latitude,
              longitude: coords.longitude,
            },
            {
              latitude: place.latitude_deg,
              longitude: place.longitude_deg,
            }
          );

          const from = moment(place.from_hour, "HH:mm:ss");
          const to = moment(place.to_hour, "HH:mm:ss");
          const opened = moment().isBetween(from, to);

          return { ...place, distance, opened };
        })
        .sort((a, b) => a.distance - b.distance);

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
