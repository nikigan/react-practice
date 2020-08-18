import placesService from "../../services/placesService";

export const onPlacesFetch = (userId) => async (dispatch) => {
  dispatch({
    type: "PLACES_FETCH_STARTED",
  });

  try {
    const { data: places } = await placesService.getAllPlaces(userId);

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
