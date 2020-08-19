import { getDistance } from "geolib";
import moment from "moment";

const setDistanceAndOpened = (place, coords) => {
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
};

const sortPlaces = (places, coords) => {
  return places
    .map((place) => {
      return setDistanceAndOpened(place, coords);
    })
    .sort((a, b) => a.distance - b.distance);
};

const formatDistance = (dist) => {
  const distanceObj = {
    unit: "м",
    distance: dist,
  };
  if (dist > 1000 * 1000) {
    distanceObj.distance = "Далеко";
    distanceObj.unit = "";
  } else if (dist > 1000) {
    distanceObj.distance = (dist / 1000).toFixed(1);
    distanceObj.unit = "км";
  }
  return distanceObj;
};

export { sortPlaces, formatDistance, setDistanceAndOpened };
