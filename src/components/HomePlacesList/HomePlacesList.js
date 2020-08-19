import React, { useEffect } from "react";
import "./HomePlacesList.scss";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { onHomePlacesFetch } from "../../store/places/actions";
import PlaceCard from "../PlaceCard";

const HomePlacesList = () => {
  const dispatch = useDispatch();

  const { placesList, fetching } = useSelector((state) => state.places);

  useEffect(() => {
    dispatch(onHomePlacesFetch());
  }, [dispatch]);

  return (
    <div className="home-places-list shadow">
      <Spin spinning={fetching} tip="Загрузка...">
        <div className="home-places-list__content">
          {placesList.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </Spin>
    </div>
  );
};

export default HomePlacesList;
