import axios from "./serviceMethods";

export default {
  getIngredients() {
    return axios.GET(`ingredients/`);
  },
  addIngredient(name, calories) {
    const data = new FormData();

    data.set("name", name);
    data.set("calories", calories);
    return axios.POST(`ingredients/`, data);
  },
};
