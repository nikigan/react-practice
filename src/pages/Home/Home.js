import React from "react";
import "./Home.scss";
import { Col, Row } from "antd";
import FilterBlock from "../../components/FilterBlock";
import HomePlacesList from "../../components/HomePlacesList";

const Home = () => {
  return (
    <div className="home">
      <Row gutter={32}>
        <Col span={24} lg={9}>
          <FilterBlock />
        </Col>
        <Col span={24} lg={15}>
          <HomePlacesList />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
