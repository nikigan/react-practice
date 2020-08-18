import { places as placesActions } from "../actionTypes";

const initialState = {
  fetching: false,
  error: false,
  errorMessage: "",
  placesList: [],
  displayedPlaces: [],
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
        displayedPlaces: [...action.payload],
      };
    case placesActions.fetch.error:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
        placesList: [],
        displayedPlaces: [],
      };
    case placesActions.close:
      return {
        ...initialState,
      };

    case placesActions.filter:
      return {
        ...state,
        displayedPlaces: [...action.payload],
      };
    default:
      return state;
  }
};

export default places;
