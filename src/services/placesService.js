import axios from "axios";

export default class PlacesService {
  static async getAllPlaces(ownerId) {
    try {
      const response = await axios.get(
        `http://37.140.197.3/api/places/?format=json&owner=${ownerId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
