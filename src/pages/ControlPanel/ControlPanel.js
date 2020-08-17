import React, { useEffect } from "react";
import "./ControlPanel.scss";
import { Col, Row } from "antd";
import "antd/es/grid/style/css";
import { useDispatch } from "react-redux";
import PlacesList from "../../components/PlacesList";
import { onControlPanelClose } from "../../store/places/actions";

const ControlPanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(onControlPanelClose());
    };
  });

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
