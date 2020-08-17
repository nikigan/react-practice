import placesService from "../../services/placesService";

export const onPlacesFetch = () => async (dispatch) => {
  dispatch({
    type: "PLACES_FETCH_STARTED",
  });

  try {
    const places = await placesService.getAllPlaces(12);
    dispatch({
      type: "PLACES_FETCH_SUCCESS",
      payload: places,
    });
  } catch (error) {
    dispatch({
      type: "PLACES_FETCH_ERROR",
      payload: error.message,
    });
  }
};

export default {
  onPlacesFetch,
};
