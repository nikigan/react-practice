import axios from "axios";

export default class PlacesService {
  static getAllPlaces() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        axios
          .get("../places.json")
          .then(({ data }) => resolve(data))
          .catch((error) => reject(error));
      }, 1500);
    });
  }
}
