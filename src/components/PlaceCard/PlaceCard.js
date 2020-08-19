import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./PlaceCard.scss";
import classNames from "classnames";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { formatDistance } from "../../utils/placesUtils";

const PlaceCard = ({ place, loading, bordered, className }) => {
  const {
    name,
    image,
    from_hour: fromHour,
    to_hour: toHour,
    average_price: avgPrice,
    address,
    distance,
    opened,
    id,
  } = place;

  const [distanceFormatted, setDistance] = useState(distance);

  const [metric, setMetric] = useState("");

  useEffect(() => {
    const distanceValue = formatDistance(distance);
    setDistance(distanceValue.distance);
    setMetric(distanceValue.unit);
  }, [distance]);

  const openedText = opened ? "Открыто" : "Закрыто";

  const cardClass = classNames(
    "place-card",
    {
      "place-card_bordered": bordered,
    },
    className
  );

  if (loading) return null;

  return (
    <Link className={cardClass} to={`/place/${id}`}>
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
    </Link>
  );
};

export default PlaceCard;

PlaceCard.propTypes = {
  place: PropTypes.objectOf(PropTypes.any).isRequired,
  loading: PropTypes.bool,
  bordered: PropTypes.bool,
  className: PropTypes.string,
};

PlaceCard.defaultProps = {
  loading: false,
  bordered: true,
  className: "",
};
