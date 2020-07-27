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
}
