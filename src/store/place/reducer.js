import placeActions from "../actionTypes";

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
    case placeActions.fetch.started:
      return {
        ...initialState,
        fetching: true,
        error: false,
        errorMessage: "",
        success: false,
      };
    case placeActions.fetch.success:
      return {
        ...state,
        fetching: false,
        ...action.payload,
      };
    case placeActions.fetch.error:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
      };

    case placeActions.image.changed:
      return {
        ...state,
        image: action.payload,
      };

    case placeActions.input.changed:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case placeActions.time.changed:
      return {
        ...state,
        from_hour: action.payload.fromHour,
        to_hour: action.payload.toHour,
      };
    case placeActions.save.started:
      return {
        ...state,
        error: false,
        success: false,
        errorMessage: "",
        fetching: true,
      };

    case placeActions.save.success:
      return {
        ...state,
        fetching: false,
        success: true,
      };

    case placeActions.save.error:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
      };

    case placeActions.closed:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default place;
