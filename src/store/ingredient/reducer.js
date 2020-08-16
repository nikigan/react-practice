import { ingredient as ingredientActions } from "../actionTypes";

const initialState = {
  fetching: false,
  error: false,
  success: false,
  modalOpened: false,
  createModalOpened: false,
  ingredientsList: [],
};

const ingredient = (state = initialState, action) => {
  switch (action.type) {
    case ingredientActions.fetch.started:
      return {
        ...state,
        fetching: true,
        error: false,
        success: false,
      };
    case ingredientActions.fetch.success:
      return {
        ...state,
        fetching: false,
        ingredientsList: [...action.payload],
      };
    case ingredientActions.fetch.error:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
      };

    case ingredientActions.input.changed:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case ingredientActions.save.started:
      return {
        ...state,
        error: false,
        success: false,
        fetching: true,
      };

    case ingredientActions.save.success:
      return {
        ...state,
        fetching: false,
        success: true,
        createModalOpened: false,
      };

    case ingredientActions.save.error:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.payload,
      };

    case ingredientActions.modal.opened:
      return {
        ...state,
        modalOpened: true,
      };

    case ingredientActions.modal.closed:
      return {
        ...state,
        modalOpened: false,
      };

    case ingredientActions.selected:
      return {
        ...state,
        ingredientsList: action.payload,
      };

    case ingredientActions.createModal.opened:
      return {
        ...state,
        createModalOpened: true,
      };

    case ingredientActions.createModal.closed:
      return {
        ...state,
        createModalOpened: false,
      };

    default:
      return state;
  }
};

export default ingredient;
