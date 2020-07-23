import React from "react";
import "./ControlPanel.scss";
import { Col } from "react-bootstrap";
import PlacesList from "../../components/PlacesList";

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <h1>Мои заведения</h1>
      <Col lg={4}>
        <PlacesList />
      </Col>
    </div>
  );
};

export default ControlPanel;
