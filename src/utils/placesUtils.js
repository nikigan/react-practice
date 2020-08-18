import { getDistance } from "geolib";
import moment from "moment";

const sortPlaces = (places, coords) => {
  return places
    .map((place) => {
      const distance = getDistance(
        {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
        {
          latitude: place.latitude_deg,
          longitude: place.longitude_deg,
        }
      );

      const from = moment(place.from_hour, "HH:mm:ss");
      const to = moment(place.to_hour, "HH:mm:ss");
      const opened = moment().isBetween(from, to);

      return { ...place, distance, opened };
    })
    .sort((a, b) => a.distance - b.distance);
};

export default sortPlaces;
