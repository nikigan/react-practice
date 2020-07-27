import axios from "axios";

export default class PlacesService {
  static async getAllPlaces(ownerId = -1) {
    const owner = ownerId < 0 ? "" : `&owner=${ownerId}`;

    try {
      const response = await axios.get(
        `http://37.140.197.3/api/places/?format=json${owner}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
