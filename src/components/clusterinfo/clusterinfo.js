import { Col, Row, Modal, Input, Button, Divider } from "antd";
import { useState } from "react";
import "./clusterinfo.css";

const ClusterInfo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [database, setDatabase] = useState("postgresql");
  const [version, setVersion] = useState(13);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <Row style={{ marginTop: "3%", color: "white" }}>
      <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
      <Col xxl={20} xl={18} lg={18} xs={22} md={20} sm={22}>
        <div>
          <h2 style={{ color: "white" }}>
            <b>Clusters</b>
          </h2>
          <p>All your clusters will be listed here.</p>
        </div>
        <div
          onClick={showModal}
          style={{
            borderRadius: "5px",
            width: "200px",
            height: "100px",
            backgroundColor: "#394150",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "white" }}>Add new</h2>
        </div>
        <Modal
          bodyStyle={{ backgroundColor: "#212936" }}
          visible={isModalVisible}
          title="Add New Cluster"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              style={{
                backgroundColor: "#42e8e0",
                color: "black",
                border: "none",
              }}
              key="back"
              onClick={handleCancel}
            >
              Cancel
            </Button>,
            <Button
              style={{
                backgroundColor: "#42e8e0",
                color: "black",
                border: "none",
              }}
              key="submit"
              onClick={handleOk}
            >
              Spin up
            </Button>,
          ]}
        >
          <p style={{ color: "#738095" }}>Name your Cluster</p>
          <Input
            bordered={false}
            className="cluster-name"
            size="large"
            placeholder="Cluster Name"
            onChange={handleName}
            style={{
              outline: "none",
              backgroundColor: "#212936",
              color: "white",
              margin: "0",
              padding: "0",
            }}
          />
          <br />
          <br />
          <p style={{ color: "#738095" }}>Choose database</p>
          <p style={{ color: "#738095" }}>Choose Version</p>
          <Divider />
        </Modal>
      </Col>
      <Col xxl={1} xl={1} lg={1} md={1} />
    </Row>
  );
};

export default ClusterInfo;
