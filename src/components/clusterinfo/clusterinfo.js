import { Col, Row } from "antd";

const ClusterInfo = () => {
  return (
    <Row style={{ marginTop: "3%", color: "white" }}>
      <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
      <Col xxl={20} xl={18} lg={18} xs={22} md={20} sm={22}>
        <h2 style={{ color: "white" }}>
          <b>Clusters</b>
        </h2>
        <p>All your clusters will be listed here.</p>
      </Col>
      <Col xxl={1} xl={1} lg={1} md={1} />
    </Row>
  );
};

export default ClusterInfo;
