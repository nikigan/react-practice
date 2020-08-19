import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PlacePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Spin, Space } from "antd";
import { onDishesFetch, onPlaceFetch } from "../../store/place/action";
import PlaceCard from "../../components/PlaceCard";
import "antd/es/spin/style/css";
import DishesList from "../../components/DishesList";
import PlaceMap from "../../components/PlaceMap";

const PlacePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const place = useSelector((state) => state.place);

  const {
    fetching,
    placeId,
    dishes,
    longitude_deg: longDeg,
    latitude_deg: latDeg,
  } = place;

  useEffect(() => {
    if (id !== placeId) {
      dispatch(onPlaceFetch(id));
    }
  }, [dispatch, id, placeId]);

  useEffect(() => {
    dispatch(onDishesFetch(id));
  }, [dispatch, id]);

  return (
    <div className="place-page">
      <Spin spinning={fetching}>
        <Row gutter={32}>
          <Col span={14}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <PlaceCard
                place={place}
                loading={fetching}
                bordered={false}
                className="shadow"
              />
              <DishesList dishes={dishes} />
            </Space>
          </Col>
          <Col span={10}>
            <PlaceMap coords={[latDeg, longDeg]} />
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default PlacePage;
