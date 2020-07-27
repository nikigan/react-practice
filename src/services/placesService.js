import axios from "axios";

export default class PlacesService {
  static getAllPlaces() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await axios.get("../places.json");
          resolve(response.data);
        } catch (error) {
          reject(error);
        }
      }, 1500);
    });
  }
}
