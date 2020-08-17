import axios from "./serviceMethods";

export default {
  getDishes(placeId) {
    return axios.GET(`dishes/`, { place: placeId });
  },
  getDish(dishId) {
    return axios.GET(`dishes/${dishId}`);
  },
  addDish(name, image, price, placeId, ingredients) {
    const data = new FormData();

    data.set("name", name);
    data.set("photo", image);
    data.set("price", price);
    data.set("place", placeId);

    if (Array.isArray(ingredients)) {
      ingredients.forEach((i) => data.append("ingredients", i.id));
    } else {
      data.append("ingredients", ingredients);
    }

    return axios.POST(`dishes/`, data);
  },
  editDish(name, image, price, placeId, ingredients, dishId) {
    const data = new FormData();

    if (name) {
      data.set("name", name);
    }
    if (image) {
      data.set("photo", image);
    }
    if (price) {
      data.set("price", price);
    }
    if (placeId) {
      data.set("place", placeId);
    }

    if (Array.isArray(ingredients)) {
      ingredients.forEach((i) => data.append("ingredients", i.id));
    } else if (ingredients) {
      data.append("ingredients", ingredients);
    }

    return axios.PATCH(`dishes/${dishId}`, data);
  },
  deleteDish(dishId) {
    return axios.DELETE(`dishes/${dishId}`);
  },
};
