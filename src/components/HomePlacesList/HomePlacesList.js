import React, { useEffect, useState } from "react";
import "./HomePlacesList.scss";
import { useDispatch, useSelector } from "react-redux";
import { getDistance } from "geolib";
import moment from "moment";
import { Spin } from "antd";
import { onPlacesFetch } from "../../store/places/actions";
import PlaceCard from "../PlaceCard";

const HomePlacesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onPlacesFetch());
  }, [dispatch]);

  const { placesList, fetching } = useSelector((state) => state.places);

  const [places, setPlaces] = useState(placesList);

  useEffect(() => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setPlaces(
          placesList
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
            .sort((a, b) => a.distance - b.distance)
        );
      });
    }
  }, [placesList, navigator]);

  return (
    <div className="home-places-list shadow">
      <Spin spinning={fetching} tip="Загрузка...">
        <div className="home-places-list__content">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </Spin>
    </div>
  );
};

export default HomePlacesList;
