import axios from "./serviceMethods";

export default {
  getAllPlaces(ownerId = null) {
    return axios.GET(`places/`, { owner: ownerId });
  },
  getPlace(placeId) {
    return axios.GET(`places/${placeId}`);
  },
  addPlace(name, image, fromHour, toHour, address) {
    const data = new FormData();

    data.set("name", name);
    data.set("image", image);
    data.set("from_hour", fromHour);
    data.set("to_hour", toHour);
    data.set("address", address);
    return axios.POST(`places/`, data);
  },
  editPlace(placeId, name, image, fromHour, toHour, address) {
    const data = new FormData();

    data.set("name", name);
    if (image) {
      data.set("image", image);
    }
    data.set("from_hour", fromHour);
    data.set("to_hour", toHour);
    data.set("address", address);
    return axios.PATCH(`places/${placeId}`, data);
  },
  deletePlace(placeId) {
    return axios.DELETE(`places/${placeId}`);
  },
};
