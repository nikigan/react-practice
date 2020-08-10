import axios from "./serviceBase";

export default class PlacesService {
  static async getAllPlaces(ownerId = null) {
    try {
      const response = await axios.get(`places/`, {
        params: {
          owner: ownerId,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getPlace(placeId) {
    try {
      const response = await axios.get(`places/${placeId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async addPlace(name, image, fromHour, toHour, address) {
    const data = new FormData();

    data.set("name", name);
    data.set("image", image);
    data.set("from_hour", fromHour);
    data.set("to_hour", toHour);
    data.set("address", address);

    try {
      const response = await axios.post(`places/`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async editPlace(placeId, name, image, fromHour, toHour, address) {
    const data = new FormData();

    data.set("name", name);
    if (image) {
      data.set("image", image);
    }
    data.set("from_hour", fromHour);
    data.set("to_hour", toHour);
    data.set("address", address);

    try {
      const response = await axios.patch(`places/${placeId}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deletePlace(placeId) {
    try {
      const response = await axios.delete(`places/${placeId}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
