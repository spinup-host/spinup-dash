import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { UserOutlined, HistoryOutlined } from "@ant-design/icons";
import Profile from "./profile";
import Backup from "./backup";

//css files
import "./settings.css";
import "antd/dist/antd.css";

const Settings = () => {
  var history = useHistory();
  const [user, setUser] = useState(null);
  
  const [showSetting,setShowSetting]=useState("profile");

  var userDetails = useSelector((state) => state.userLogs);

  //this is to get userdetails
  useEffect(() => {
    if (!userDetails.username && !localStorage.getItem("details")) {
      history.push("/");
    } else {
      userDetails = JSON.parse(localStorage.getItem("details"));
      // console.log(JSON.parse(localStorage.getItem("details")));
      setUser(userDetails);
    }
  }, []);

  return (
    <>
      <Navbar userDetails={user} />
      {/* The Settings button bar */}
      <Row>
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        <Col>
          <Row style={{ marginTop: "50px" }}>
            <Col
              xxl={6}
              xl={6}
              lg={6}
              xs={8}
              md={8}
              sm={8}
              style={{ display: "flex" }}
            >
              <h2 className="settingsTitle">Settings</h2>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
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
              <Button className="settingsButton" type="primary" onClick={()=>{setShowSetting("profile")}}>
                <UserOutlined style={{ color: "white" }} />
                Profile
              </Button>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
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
              <Button className="backupButton" type="primary" onClick={()=>{setShowSetting("backup")}}>
                <HistoryOutlined style={{ color: "white" }} />
                Backup
              </Button>
            </Col>
          </Row>
        </Col>
        {/* The Settings button bar */}
        <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
        {showSetting === "profile" ? <Profile /> : <Backup />}        
      </Row>
    </>
  );
};

export default Settings;
