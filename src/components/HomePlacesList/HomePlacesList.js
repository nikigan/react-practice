import React, { useEffect } from "react";
import "./HomePlacesList.scss";
import { useDispatch, useSelector } from "react-redux";
import { Empty, Space, Spin } from "antd";
import "antd/es/empty/style/css";
import { onHomePlacesFetch } from "../../store/places/actions";
import PlaceCard from "../PlaceCard";

const HomePlacesList = () => {
  const dispatch = useDispatch();

  const { displayedPlaces, fetching } = useSelector((state) => state.places);

  useEffect(() => {
    dispatch(onHomePlacesFetch());
  }, [dispatch]);

  const renderItem =
    displayedPlaces.length > 0 ? (
      displayedPlaces.map((place) => <PlaceCard key={place.id} place={place} />)
    ) : (
      <Empty description="Заведения не найдены" />
    );

  return (
    <div className="home-places-list shadow">
      <Spin spinning={fetching} tip="Загрузка...">
        <div className="home-places-list__content">
          <Space direction="vertical" size="middle">
            {!fetching && renderItem}
          </Space>
        </div>
      </Spin>
    </div>
  );
};

export default HomePlacesList;
