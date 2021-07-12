import React, { useEffect, useState } from "react";
import { Col, Row, Radio, Typography, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./backup.css";

const Backup = () => {
  const [backupRadio, setBackupRadio] = useState("enable");
  const [backUpFrequency, setFrequency] = useState("24hrs");
  const [backupServer, setBackupServer] = useState("spinup");

  const changeBackupRadio = (e) => {
    setBackupRadio(e.target.value);
  };

  const changeBackupServer = (e) => {
    setBackupServer(e.target.value);
  };

  function handleMenuClick(e) {
    setFrequency(e.key);
  }

  const dropdownMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="24hrs">Every 24 Hours</Menu.Item>
      <Menu.Item key="12hrs">Every 12 Hours</Menu.Item>
      <Menu.Item key="6hrs">Every 6 Hours</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row style={{ marginTop: "10vh" }}>
        <Col>
          <Row>
            <Typography className="backUpTitle">
              This setting lets you configure your data backup
            </Typography>
          </Row>
          <Row style={{ marginTop: "5vh" }}>
            <Typography className="dataTitles">Backup</Typography>
          </Row>
          <Row style={{ marginTop: "3vh" }}>
            <Col>
              <Radio.Group onChange={changeBackupRadio} value={backupRadio}>
                <Radio value={"enable"} style={{ paddingRight: "5em" }}>
                  <p className="radioOptions">Enable</p>
                </Radio>
                <Radio value={"disable"}>
                  <p className="radioOptions">Disable</p>
                </Radio>
              </Radio.Group>
            </Col>
          </Row>

          <Row style={{ marginTop: "5vh" }}>
            <Typography className="dataTitles">Backup Frequency</Typography>
          </Row>

          <Row style={{ marginTop: "3vh" }}>
            <Col>
              <Dropdown overlay={dropdownMenu}>
                <Button style={{ backgroundColor: "#394150", border: "0px" }}>
                  <p className="radioOptions">
                    {backUpFrequency} <DownOutlined />
                  </p>
                </Button>
              </Dropdown>
            </Col>
          </Row>

          <Row style={{ marginTop: "5vh" }}>
            <Typography className="dataTitles">Backup Server</Typography>
          </Row>
          <Row style={{ marginTop: "3vh" }}>
            <Col>
              <Radio.Group onChange={changeBackupServer} value={backupServer}>
                <Radio value={"spinup"} style={{ paddingRight: "5em" }}>
                  <p className="radioOptions">Spinup</p>
                </Radio>
                <Radio value={"AWS"} style={{ paddingRight: "5em" }}>
                  <p className="radioOptions">AWS</p>
                </Radio>
                <Radio value={"Google Cloud"}>
                  <p className="radioOptions">Google Cloud</p>
                </Radio>
              </Radio.Group>
            </Col>
          </Row>

          <Row style={{ marginTop: "5vh" }}>
          <Button className="saveChanges">
              Save Changes
          </Button>    
          
          </Row>          

        </Col>
      </Row>
    </>
  );
};

export default Backup;
