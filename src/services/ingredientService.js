import axios from "./serviceMethods";

export default {
  async getIngredients() {
    try {
      const response = await axios.GET(`ingredients/`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async addIngredient(name, calories) {
    const data = new FormData();

    data.set("name", name);
    data.set("calories", calories);

    try {
      const response = await axios.POST(`ingredients/`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
