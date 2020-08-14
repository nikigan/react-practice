import axios from "./serviceMethods";

export default {
  async getDishes(placeId) {
    try {
      const response = await axios.GET(`dishes/`, { place: placeId });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async getDish(dishId) {
    try {
      const response = await axios.GET(`dishes/${dishId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async addDish(name, image, price, placeId, ingredients) {
    const data = new FormData();

    data.set("name", name);
    data.set("photo", image);
    data.set("price", price);
    data.set("place", placeId);

    if (Array.isArray(ingredients)) {
      ingredients.forEach((i) => data.append("ingredients", i));
    } else {
      data.append("ingredients", ingredients);
    }

    try {
      const response = await axios.POST(`dishes/`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async editDish(name, image, price, placeId, ingredients, dishId) {
    const data = new FormData();

    data.set("name", name);
    if (image) {
      data.set("photo", image);
    }
    data.set("price", price);
    data.set("place", placeId);

    if (Array.isArray(ingredients)) {
      ingredients.forEach((i) => data.append("ingredients", i));
    } else {
      data.append("ingredients", ingredients);
    }

    try {
      const response = await axios.PATCH(`dishes/${dishId}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteDish(dishId) {
    try {
      const response = await axios.DELETE(`dishes/${dishId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
