import PlacesService from "../../services/placesService";

export const onPlacesFetch = () => (dispatch) => {
  dispatch({
    type: "PLACES_FETCH_STARTED",
  });

  PlacesService.getAllPlaces()
    .then((places) => {
      dispatch({
        type: "PLACES_FETCH_ENDED",
      });

      dispatch({
        type: "PLACES_FETCH_SUCCESS",
        payload: places,
      });
    })
    .catch((error) => {
      dispatch({
        type: "PLACES_FETCH_ENDED",
      });

      dispatch({
        type: "PLACES_FETCH_ERROR",
        payload: error.message,
      });
    });
};

export default {
  onPlacesFetch,
};
