import { places as placesActions } from "../actionTypes";

const initialState = {
  fetching: false,
  error: false,
  errorMessage: "",
  placesList: [],
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case placesActions.fetch.started:
      return {
        ...state,
        fetching: true,
        error: false,
        errorMessage: "",
      };
    case placesActions.fetch.success:
      return {
        ...state,
        fetching: false,
        placesList: [...action.payload],
      };
    case placesActions.fetch.error:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
        placesList: [],
      };
    case placesActions.close:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default places;
