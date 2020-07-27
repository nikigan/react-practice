const initialState = {
  fetching: false,
  error: false,
  errorMessage: "",
  placesList: [],
};

const places = (state = initialState, action) => {
  switch (action.type) {
    case "PLACES_FETCH_STARTED":
      return {
        ...state,
        fetching: true,
        error: false,
        errorMessage: "",
      };
    case "PLACES_FETCH_SUCCESS":
      return {
        ...state,
        fetching: false,
        placesList: [...action.payload],
      };
    case "PLACES_FETCH_ERROR":
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
        placesList: [],
      };
    default:
      return state;
  }
};

export default places;