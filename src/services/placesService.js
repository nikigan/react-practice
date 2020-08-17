import axios from "./serviceMethods";

export default {
  getAllPlaces(ownerId = null) {
    return axios.GET(`places/`, { owner: ownerId });
  },
  async getPlace(placeId) {
    try {
      const response = await axios.GET(`places/${placeId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async addPlace(name, image, fromHour, toHour, address) {
    const data = new FormData();

    data.set("name", name);
    data.set("image", image);
    data.set("from_hour", fromHour);
    data.set("to_hour", toHour);
    data.set("address", address);

    try {
      const response = await axios.POST(`places/`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async editPlace(placeId, name, image, fromHour, toHour, address) {
    const data = new FormData();

    data.set("name", name);
    if (image) {
      data.set("image", image);
    }
    data.set("from_hour", fromHour);
    data.set("to_hour", toHour);
    data.set("address", address);

    try {
      const response = await axios.PATCH(`places/${placeId}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async deletePlace(placeId) {
    try {
      const response = await axios.DELETE(`places/${placeId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
