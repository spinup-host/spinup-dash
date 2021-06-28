import React from "react";

import { Row, Col, Tag, Divider, Tabs } from "antd";

import {
  CopyOutlined,
  DatabaseOutlined,
  SettingOutlined,
  LineChartOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const ClusterDetails = () => {
  return (
    <>
      <Row style={{ marginTop: "50px" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col
          xxl={6}
          xl={6}
          lg={6}
          xs={8}
          md={8}
          sm={8}
          style={{ display: "flex" }}
        >
          <h2 style={{ color: "white" }}>
            <b>Spinup</b>
          </h2>
          <Tag
            style={{ height: "23px", marginTop: "7px", marginLeft: "20px" }}
            color="#f4f5f7"
          >
            <b style={{ color: "black" }}>Not Connected</b>
          </Tag>
          <p style={{ color: "#3fd8d7", marginTop: "9px", marginLeft: "15px" }}>
            <SyncOutlined /> Refresh
          </p>
        </Col>
        <Col xxl={11} xl={11} lg={11} xs={9} md={9} sm={9}>
          <Tag color="#2c383c" style={{ float: "right", borderRadius: "5px" }}>
            <h2 style={{ color: "#dcdce5", marginTop: "9px" }}>
              <CopyOutlined /> Copy Host Link
            </h2>
          </Tag>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={1} />
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col
          xxl={17}
          xl={17}
          lg={17}
          xs={20}
          md={20}
          sm={20}
          style={{ display: "flex" }}
        >
          <h3 style={{ color: "#738095" }}>
            <b>
              <LineChartOutlined /> Monitoring
            </b>
          </h3>
          <h3 style={{ marginLeft: "40px", color: "#738095" }}>
            <b>
              <DatabaseOutlined /> Databases
            </b>
          </h3>
          <h3 style={{ marginLeft: "40px", color: "#738095" }}>
            <b>
              <SettingOutlined /> Configurations
            </b>
          </h3>
        </Col>
        <Col xxl={4} xl={4} lg={4} xs={2} md={1} sm={2} />
      </Row>
      <Divider style={{ backgroundColor: "#313b4d", marginTop: "-1px" }} />
      <Row></Row>
    </>
  );
};

export default ClusterDetails;
