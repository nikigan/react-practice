import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PlacesList.scss";
import { Spin } from "antd";
import "antd/es/spin/style/css";
import { Link } from "react-router-dom";
import Place from "../Place";
import Error from "../Error";
import { onPlacesFetch } from "../../store/places/actions";

const PlacesList = () => {
  const dispatch = useDispatch();

  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(onPlacesFetch(userId));
  }, [dispatch, userId]);

  const { placesList, fetching, error, errorMessage } = useSelector(
    (state) => state.places
  );

  return (
    <div className="places-list">
      <div className="places-list__list">
        {fetching && (
          <Spin tip="Загрузка..." size="large" className="loading-spinner" />
        )}
        {!fetching && !error && placesList.length === 0 && (
          <span className="places-list__empty">Список заведений пуст!</span>
        )}
        {!fetching &&
          !error &&
          placesList.length > 0 &&
          placesList.map((place) => (
            <Place key={place.id} name={place.name} id={place.id} />
          ))}
        {error && <Error message={errorMessage} />}
      </div>
      <Link type="button" className="places-list__btn" to="places/new">
        Добавить заведение
      </Link>
    </div>
  );
};

export default PlacesList;
