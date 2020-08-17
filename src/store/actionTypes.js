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
  image: {
    changed: "DISH_IMAGE_CHANGED",
  },
  input: {
    changed: "DISH_INPUT_CHANGED",
  },
  closed: "DISH_CLOSED",
};

export { place, dish };
