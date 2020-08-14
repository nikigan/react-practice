import axios from "./serviceBase";

export default class dishService {
  static async getDishes(placeId) {
    try {
      const response = await axios.get(`dishes/`, {
        params: {
          place: placeId,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getDish(dishId) {
    try {
      const response = await axios.get(`dishes/${dishId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async addDish(name, image, price, placeId, ingredients) {
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
      const response = await axios.post(`dishes/`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async editDish(name, image, price, placeId, ingredients, dishId) {
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
      const response = await axios.patch(`dishes/${dishId}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteDish(dishId) {
    try {
      const response = await axios.delete(`dish/${dishId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
