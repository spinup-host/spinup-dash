import React, { useState } from "react";
import { Row, Col, Tag, Divider, Input, Card, Button, TimePicker } from "antd";
import schedulebackup from "../../api/createbackup";
import { CopyOutlined, SyncOutlined } from "@ant-design/icons";
import NotificationContainer from "../notifications/container";
import { createNotification } from "../notifications/notify";
import Navbar from "../navbar/navbar";

const selectedElement = {
  color: "#738095",
  borderBottom: "3px solid #ff9580",
  color: "#ffffff",
  fontWeight: "500",
};

const BackupInfo = () => {
  let dbName = localStorage.getItem("currdbname");
  const [dest, setDest] = useState("");
  const [desturl, setDestUrl] = useState("");
  const [apikey, setApiKey] = useState("");
  const [apikeysecret, setApiKeySecret] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [backuptime, setTime] = useState("");

  const handleClick = async () => {
    let backupdetails = {
      dbname: dbName,
      username: username,
      password: password,
      apikey: apikey,
      apikeysecret: apikeysecret,
      dest: dest,
      bucketname: desturl,
      hour: backuptime.split(":")[0],
      minute: backuptime.split(":")[1],
    };
    let response = await schedulebackup(backupdetails);
    if (response.status === 200) {
      createNotification("success", "Backup Scheduled");
    } else {
      createNotification("error", "Backup Failed");
    }
  };

  return (
    <>
      <Navbar />
      <Row style={{ marginTop: "50px" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={2} sm={2} />
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
          <p
            style={{
              color: "#3fd8d7",
              marginTop: "9px",
              marginLeft: "15px",
              cursor: "pointer",
            }}
          >
            <SyncOutlined /> Refresh
          </p>
        </Col>
        <Col xxl={12} xl={12} lg={12} xs={10} md={10} sm={10}>
          <Tag
            color="#2c383c"
            style={{ float: "right", borderRadius: "5px" }}
            onClick={() => {
              createNotification("success", "Copied Link!");
            }}
          >
            <h2
              style={{ color: "#dcdce5", marginTop: "9px", cursor: "pointer" }}
            >
              <CopyOutlined /> Copy Host Link
            </h2>
          </Tag>
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={4} md={4} sm={4} />
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col xxl={3} xl={3} lg={3} xs={2} md={2} sm={2} />
        <Col
          xxl={18}
          xl={18}
          lg={18}
          xs={20}
          md={20}
          sm={20}
          style={{ display: "flex" }}
        >
          <button
            style={{
              border: "0px solid transparent",
              background: "transparent",
            }}
          >
            <h3>
              <b style={selectedElement}>Schedule a Backup</b>
            </h3>
          </button>
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={2} sm={2} />
      </Row>
      <Divider style={{ backgroundColor: "#313b4d", marginTop: "-1px" }} />
      <Row>
        <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1} />
        <Col xxl={16} xl={16} lg={16} xs={22} md={22} sm={22}>
      <Row>
        <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
        <Col xxl={18} xl={18} lg={18} xs={22} md={22} sm={22}>
          <p style={{ color: "#738095" }}>Database Name</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "60px",
              borderRadius: "5px",
            }}
            value={dbName}
            disabled
          />
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={2} md={2} sm={2} />
      </Row>
      <Row style={{marginTop: "1%"}}>
        <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
        <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          <p style={{ color: "#738095" }}>Destination Name</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            onChange={(e) => setDest(e.target.value)}
          />
        </Col>
        <Col xxl={2} xl={2} lg={2} xs={1} md={1} sm={1} />
        <Col xxl={0} xl={0} lg={0} xs={1} md={1} sm={1} />
        <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          <p style={{ color: "#738095" }}>Destination URL</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            onChange={(e) => setDestUrl(e.target.value)}
          />
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
      </Row>
      <Row style={{marginTop: "1%"}}>
      <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
        <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          <p style={{ color: "#738095" }}>API key ID</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </Col>
        <Col xxl={2} xl={2} lg={2} xs={1} md={1} sm={1} />
        <Col xxl={0} xl={0} lg={0} xs={1} md={1} sm={1} />
        <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          <p style={{ color: "#738095" }}>API key Secret</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            onChange={(e) => setApiKeySecret(e.target.value)}
          />
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
      </Row>
      <Row style={{marginTop:"1%"}}>
      <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
      <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
          <p style={{ color: "#738095" }}>Username</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Col>
        <Col xxl={2} xl={2} lg={2} xs={1} md={1} sm={1} />
        <Col xxl={0} xl={0} lg={0} xs={1} md={1} sm={1} />

        <Col xxl={8} xl={8} lg={8} xs={22} md={22} sm={22}>
        <Col
          xxl={4}
          xl={4}
          lg={4}
          xs={20}
          md={10}
          sm={20}
          style={{ marginLeft: "50px", marginTop: "20px" }}
        >
          <p style={{ color: "#738095" }}>Password</p>
          <Input
            bordered={false}
            style={{
              backgroundColor: "#394150",
              color: "white",
              height: "40px",
              borderRadius: "5px",
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
        <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
      </Row>
      <Row style={{marginTop: "1%"}}>
      <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
        <Col
          xxl={4}
          xl={4}
          lg={4}
          xs={10}
          md={10}
          sm={10}
        >
          <p style={{ color: "#738095" }}>Set Backup Time</p>
          <TimePicker
            format={"HH:mm"}
            onChange={(time, timeString) => setTime(timeString)}
          />
        </Col>
      </Row>
      <Row style={{marginTop: "1%"}}>
        <Col xxl={3} xl={3} lg={3} xs={1} md={1} sm={1} />
        <Col
          xxl={4}
          xl={4}
          lg={4}
          xs={10}
          md={10}
          sm={10}
        >
         <Button
            type="text"
            style={{
              color: "black",
              backgroundColor: "#42e8e0",
            }}
            onClick={handleClick}
          >
            <b>Create Backup</b>
          </Button>
        </Col>
      </Row>
      <NotificationContainer />
      </Col>
      <Col xxl={0} xl={0} lg={0} xs={1} md={1} sm={1} />
      <Col xxl={0} xl={0} lg={0} xs={2} md={2} sm={2} />
      <Col style={{marginTop: "1%"}} xxl={6} xl={6} lg={6} xs={21} md={21} sm={21}>
      <Card
            style={{
              backgroundColor: "#283141",
              border: "none",
            }}
            headStyle={{
              borderBottom: "none",
            }}
          >
            <p style={{ color: "#6abfaf", fontSize: "18px" }}>
                Connect to your cluster from anywhere
              </p>
            <p style={{ color: "#a0aec8" }}>
              Open Terminal on your device
            </p>
            <p style={{ color: "#a0aec8" }}>
              Copy paste your host link & press enter
            </p>
            <p style={{ color: "#a0aec8" }}>Enter your password. voila!</p>
            <p style={{ color: "#a0aec8" }}>Create as much as dbs you want!</p>
          </Card>
      </Col>
      <Col xxl={1} xl={1} lg={1} xs={1} md={1} sm={1}/>
      </Row>
    </>
  );
};

export default BackupInfo;
