const place = {
  fetch: {
    started: "PLACE_FETCH_STARTED",
    success: "PLACE_FETCH_SUCCESS",
    error: "PLACE_FETCH_ERROR",
  },
  dishes: {
    fetched: "PLACE_DISHES_FETCHED",
  },
  save: {
    started: "PLACE_SAVE_STARTED",
    success: "PLACE_SAVE_SUCCESS",
    error: "PLACE_SAVE_ERROR",
  },
  delete: {
    error: "PLACE_DELETE_ERROR",
  },
  image: {
    changed: "PLACE_IMAGE_CHANGED",
  },
  input: {
    changed: "PLACE_INPUT_CHANGED",
  },
  time: {
    changed: "PLACE_TIME_CHANGED",
  },
  closed: "PLACE_CLOSED",
};

const dish = {
  fetch: {
    started: "DISH_FETCH_STARTED",
    success: "DISH_FETCH_SUCCESS",
    error: "DISH_FETCH_ERROR",
  },
  save: {
    started: "DISH_SAVE_STARTED",
    success: "DISH_SAVE_SUCCESS",
    error: "DISH_SAVE_ERROR",
  },
  delete: {
    error: "DISH_DELETE_ERROR",
  },
  ingredient: {
    deleted: "DISH_INGREDIENT_DELETED",
    fetched: "DISH_INGREDIENTS_FETCHED",
  },
  image: {
    changed: "DISH_IMAGE_CHANGED",
  },
  input: {
    changed: "DISH_INPUT_CHANGED",
  },
  closed: "DISH_CLOSED",
};

const ingredient = {
  fetch: {
    started: "INGREDIENT_FETCH_STARTED",
    success: "INGREDIENT_FETCH_SUCCESS",
    error: "INGREDIENT_FETCH_ERROR",
  },
  save: {
    started: "INGREDIENT_SAVE_STARTED",
    success: "INGREDIENT_SAVE_SUCCESS",
    error: "INGREDIENT_SAVE_ERROR",
  },
  delete: {
    error: "INGREDIENT_DELETE_ERROR",
  },
  input: {
    changed: "INGREDIENT_INPUT_CHANGED",
  },
  closed: "INGREDIENT_CLOSED",
  modal: {
    opened: "INGREDIENT_MODAL_OPENED",
    closed: "INGREDIENT_MODAL_CLOSED",
  },
  createModal: {
    opened: "CREATE_MODAL_OPENED",
    closed: "CREATE_MODAL_CLOSED",
  },
  selected: "INGREDIENT_SELECTED",
};

const auth = {
  login: {
    started: "AUTH_LOGIN_STARTED",
    success: "AUTH_LOGIN_SUCCESS",
    error: "AUTH_LOGIN_ERROR",
  },
  logout: "AUTH_LOGOUT",
};

export { place, dish, ingredient, auth };
