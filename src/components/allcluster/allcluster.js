import React from "react";
import { Col, Row, Modal, Input, Button, Divider } from "antd";
import { useState } from "react";
import DatabaseForDashboard from "../databases/dbsForDashboard";
import DatabaseVersion from "../dbVersions/dbversions";
import { handleOk } from "../../api/createService";
import NotificationContainer from "../notifications/container";
import shortid from "shortid";
//css
import "./allcluster.css";

const MemoedDatabases = React.memo(DatabaseForDashboard);

const AllCluster = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [database, setDatabase] = useState("postgres");
  const [version, setVersion] = useState(13);
  const allDbs = ["postgres", "mysql", "ectd"];
  const allVersions = [13, 12, 11, 10];
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleFinish = async () => {
    setIsModalVisible(false);
    // console.log(name, database, version);
    var answer = await handleOk(name, database, version);
    setIsModalVisible(false);
    setName("");
    setVersion(13);
    setDatabase("postgresql");
  };

  const handleCancel = () => {
    setName("");
    setVersion(13);
    setDatabase("postgresql");
    setIsModalVisible(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
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
              cursor: "pointer",
            }}
          >
            <h2 style={{ color: "white" }}>Add new</h2>
          </div>
          <Modal
            bodyStyle={{ backgroundColor: "#212936" }}
            visible={isModalVisible}
            title="Add New Cluster"
            onOk={handleFinish}
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
                onClick={handleFinish}
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
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
                borderBottomColor: "#5cfff3",
              }}
            />
            <br />
            <br />
            <p style={{ color: "#738095" }}>Choose database</p>
            <Row>
              {allDbs.map((dbName) => {
                return (
                  <Col span={8}>
                    <button
                      onClick={() => setDatabase(dbName)}
                      style={{
                        border: "0px solid transparent",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                      key={shortid.generate()}
                    >
                      {/* <DatabaseForDashboard
                      databaseSelected={database}
                      databaseRendering={dbName}
                    /> */}
                      <MemoedDatabases
                        databaseSelected={database}
                        databaseRendering={dbName}
                      />
                    </button>
                  </Col>
                );
              })}
            </Row>
            <br />
            <p style={{ color: "#738095" }}>Choose Version</p>
            <Row justify="start">
              {allVersions.map((versionPassed) => {
                return (
                  <Col span={4}>
                    <button
                      onClick={() => setVersion(versionPassed)}
                      style={{
                        border: "0px solid transparent",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                      key={shortid.generate()}
                    >
                      <DatabaseVersion
                        selectedVersion={version}
                        currVersion={versionPassed}
                      />
                    </button>
                  </Col>
                );
              })}
            </Row>
            <Divider />
          </Modal>
        </Col>
        <Col xxl={1} xl={1} lg={1} md={1} />
      </Row>
      <NotificationContainer />
    </>
  );
};

export default AllCluster;
//original code for all databases before map---(below)
{
  /* <Col span={8}>
              <button
                onClick={() => setDatabase("postgresql")}
                style={{
                  border: "0px solid transparent",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <DatabaseForDashboard
                  databaseSelected={database}
                  databaseRendering={"postgresql"}
                />
              </button>
            </Col>
            <Col span={8}>
              <button
                onClick={() => setDatabase("mysql")}
                style={{
                  border: "0px solid transparent",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <DatabaseForDashboard
                  databaseSelected={database}
                  databaseRendering={"mysql"}
                />
              </button>
            </Col>
            <Col span={8}>
              <button
                onClick={() => setDatabase("ectd")}
                style={{
                  border: "0px solid transparent",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <DatabaseForDashboard
                  databaseSelected={database}
                  databaseRendering={"ectd"}
                />
              </button>
            </Col> */
}
