import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./PlacesList.scss";
import Place from "../Place";
import { onPlacesFetch } from "../../store/places/actions";

// eslint-disable-next-line no-unused-vars,no-shadow
const PlacesList = ({ placesList, fetching, error, onPlacesFetch }) => {
  useEffect(() => {
    console.log("effect");
    onPlacesFetch();
  }, [onPlacesFetch]);

  return (
    <div className="places-list">
      <div className="places-list__list">
        {/* eslint-disable-next-line react/prop-types */}
        {placesList.map((place) => (
          <Place key={place.id} name={place.name} />
        ))}
      </div>
      <button type="button" className="places-list__btn">
        Добавить заведение
      </button>
    </div>
  );
};

PlacesList.propTypes = {
  placesList: PropTypes.arrayOf(PropTypes.object),
  fetching: PropTypes.bool,
  error: PropTypes.bool,
  onPlacesFetch: PropTypes.func.isRequired,
};

PlacesList.defaultProps = {
  placesList: [],
  fetching: false,
  error: false,
};

const mapStateToProps = ({ places }) => {
  return {
    placesList: places.placesList,
    fetching: places.fetching,
    error: places.error,
  };
};
export default connect(mapStateToProps, { onPlacesFetch })(PlacesList);
