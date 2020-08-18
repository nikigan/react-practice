import { filters as filtersActions } from "../actionTypes";

const initialState = {
  query: "",
  price: 500,
  opened: false,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case filtersActions.query:
      return {
        ...state,
        query: action.payload,
      };

    case filtersActions.price:
      return {
        ...state,
        price: action.payload,
      };

    case filtersActions.opened:
      return {
        ...state,
        opened: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default filters;
