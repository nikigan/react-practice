import PropTypes from "prop-types";
import React from "react";
import "./PlaceMap.scss";
import { Map, Placemark, YMaps } from "react-yandex-maps";

const PlaceMap = ({ coords }) => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [...coords], zoom: 16 }}
        className="place-map shadow"
      >
        <Placemark defaultGeometry={[...coords]} />
      </Map>
    </YMaps>
  );
};

export default PlaceMap;

PlaceMap.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
};
