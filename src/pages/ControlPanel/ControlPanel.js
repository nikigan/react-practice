import React from "react";
import "./ControlPanel.scss";
import { Col, Row } from "antd";
import "antd/es/grid/style/css";
import PlacesList from "../../components/PlacesList";

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <h1>Мои заведения</h1>
      <Row>
        <Col span={24} lg={8}>
          <PlacesList />
        </Col>
      </Row>
    </div>
  );
};

export default ControlPanel;
