import { dish as dishActions } from "../actionTypes";

const initialState = {
  fetching: false,
  error: false,
  success: false,
  ingredients: [],
};

const dish = (state = initialState, action) => {
  switch (action.type) {
    case dishActions.fetch.started:
      return {
        ...initialState,
        fetching: true,
        error: false,
        success: false,
      };
    case dishActions.fetch.success:
      return {
        ...state,
        fetching: false,
        ...action.payload,
      };
    case dishActions.fetch.error:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
      };

    case dishActions.image.changed:
      return {
        ...state,
        photo: action.payload,
      };

    case dishActions.input.changed:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case dishActions.save.started:
      return {
        ...state,
        error: false,
        success: false,
        fetching: true,
      };

    case dishActions.save.success:
      return {
        ...state,
        fetching: false,
        success: true,
      };

    case dishActions.save.error:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
      };

    case dishActions.ingredient.deleted:
      return {
        ...state,
        ingredients: state.ingredients.filter((i) => i.id !== action.payload),
      };

    case dishActions.ingredient.fetched:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };

    case dishActions.closed:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default dish;
