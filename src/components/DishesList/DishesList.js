import PropTypes from "prop-types";
import React from "react";
import "./DishesList.scss";
import { Col, Row } from "antd";
import Dish from "../Dish";

const DishesList = ({ dishes }) => {
  return (
    <div className="dishes-list shadow">
      <Row gutter={16}>
        {dishes.map((dish) => {
          return (
            <Col span={8} key={dish.id}>
              <Dish key={dish.id} dish={dish} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default DishesList;

DishesList.propTypes = {
  dishes: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.objectOf(PropTypes.any),
  ]),
};

DishesList.defaultProps = {
  dishes: [],
};
