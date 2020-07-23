import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./PlacesList.scss";
import { Spin } from "antd";
import "antd/es/spin/style/css";
import Place from "../Place";
import { onPlacesFetch } from "../../store/places/actions";
import Error from "../Error";

const PlacesList = ({
  placesList,
  fetching,
  error,
  errorMessage,
  onPlacesFetch: onPageLoaded,
}) => {
  useEffect(() => {
    onPageLoaded();
  }, [onPageLoaded]);

  const renderItem = fetching ? (
    <Spin tip="Загрузка..." size="large" className="loading-spinner" />
  ) : (
    placesList.map((place) => <Place key={place.id} name={place.name} />)
  );

  return (
    <div className="places-list">
      <div className="places-list__list">
        {error ? <Error message={errorMessage} /> : renderItem}
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
  errorMessage: PropTypes.string,
  onPlacesFetch: PropTypes.func.isRequired,
};

PlacesList.defaultProps = {
  placesList: [],
  fetching: false,
  error: false,
  errorMessage: "",
};

const mapStateToProps = ({ places }) => {
  return {
    placesList: places.placesList,
    fetching: places.fetching,
    error: places.error,
    errorMessage: places.errorMessage,
  };
};
export default connect(mapStateToProps, { onPlacesFetch })(PlacesList);
