const initialState = {
  fetching: false,
  error: false,
  errorMessage: "",
  success: false,
  from_hour: "09:00:00",
  to_hour: "21:00:00",
};

const place = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE_FETCH_STARTED":
      return {
        ...initialState,
        fetching: true,
        error: false,
        errorMessage: "",
        success: false,
      };
    case "PLACE_FETCH_SUCCESS":
      return {
        ...state,
        fetching: false,
        ...action.payload,
      };
    case "PLACE_FETCH_ERROR":
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
      };

    case "PLACE_IMAGE_CHANGED":
      return {
        ...state,
        image: action.payload,
      };

    case "PLACE_INPUT_CHANGED":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "PLACE_TIME_CHANGED":
      return {
        ...state,
        from_hour: action.payload.fromHour,
        to_hour: action.payload.toHour,
      };
    case "PLACE_SAVE_STARTED":
      return {
        ...state,
        error: false,
        success: false,
        errorMessage: "",
        fetching: true,
      };

    case "PLACE_SAVE_SUCCESS":
      return {
        ...state,
        fetching: false,
        success: true,
      };

    case "PLACE_SAVE_ERROR":
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
      };

    case "PLACE_CLOSED":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default place;
