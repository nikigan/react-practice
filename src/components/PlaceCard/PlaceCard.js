import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./PlaceCard.scss";
import { Col, Row } from "antd";

const PlaceCard = ({ place }) => {
  const {
    name,
    image,
    from_hour: fromHour,
    to_hour: toHour,
    average_price: avgPrice,
    address,
    distance,
    opened,
  } = place;

  const [distanceFormatted, setDistance] = useState(distance);

  const [metric, setMetric] = useState("м");

  useEffect(() => {
    if (distanceFormatted > 1000 * 100) {
      setDistance("Далеко");
      setMetric("");
    } else if (distanceFormatted > 1000) {
      setMetric("км");
      setDistance((distanceFormatted / 1000).toFixed(1));
    }
  }, [distanceFormatted]);

  const openedText = opened ? "Открыто" : "Закрыто";

  return (
    <div className="place-card">
      <Row>
        <Col span={12}>
          <div className="place-card__left">
            <span className="place-card__name">{name}</span>
            <div className="place-card__desc">
              <span className="place-card__line">{`${openedText}, ${fromHour} - ${toHour}`}</span>
              <span className="place-card__line">{`Средний чек: ${avgPrice} руб.`}</span>
              <span className="place-card__line">{address}</span>
            </div>
            <span className="place-card__distance">{`${distanceFormatted} ${metric} от вас`}</span>
          </div>
        </Col>
        <Col span={12}>
          <img src={image} alt={name} className="place-card__image" />
        </Col>
      </Row>
    </div>
  );
};

export default PlaceCard;

PlaceCard.propTypes = {
  place: PropTypes.objectOf(PropTypes.any).isRequired,
};
