import React from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Layout, { Header } from "antd/lib/layout/layout";
import { Col, Menu, Row, Button, Dropdown } from "antd";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";

import Logo from "../../assets/images/Logo.png";
import { loggingOut } from "../../actions/logOut";

import "antd/dist/antd.css";

const Navbar = ({ userDetails }) => {
  var history = useHistory();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(loggingOut());
    history.push("/");
  };

  const handleSettings = () => {
    history.push("/dashboard/settings");
  };

  const menu = (
    <Menu style={{ backgroundColor: "#212936" }}>
      <Menu.Item
        key="username"
        style={{ color: "white", pointerEvents: "none" }}
      >
        <b>{userDetails ? userDetails.username : <></>}</b>
      </Menu.Item>
      <Menu.Item key="name" style={{ color: "white", pointerEvents: "none" }}>
        {userDetails ? userDetails.name : <></>}
      </Menu.Item>
      <Menu.Item
        key="settings"
        style={{ color: "white", backgroundColor: "#212936" }}
      >
        <div onClick={handleSettings}>
          <SettingOutlined /> <b>Settings</b>
        </div>
      </Menu.Item>
      <Menu.Item
        key="logout"
        style={{ backgroundColor: "#212936", color: "white" }}
      >
        <div onClick={handleLogout}>
          <LogoutOutlined /> <b>Logout</b>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header style={{ padding: "0", height: "67px" }}>
        <Row>
          <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
          <Col xxl={17} xl={17} lg={17} xs={20} md={20} sm={20}>
            <a style={{ float: "left" }} href="/#">
              <img src={Logo} alt="spinup-logo" />
            </a>
            <Menu
              mode="horizontal"
              theme="light"
              style={{
                float: "right",
                textAlign: "right",
                border: "none",
                backgroundColor: "white",
              }}
            >
              <Menu.Item
                key="create-new-cluster"
                style={{ backgroundColor: "#09132b" }}
              >
                <Button
                  type="text"
                  style={{
                    color: "black",
                    backgroundColor: "#42e8e0",
                  }}
                >
                  <b>Create Cluster</b>
                </Button>
              </Menu.Item>
              {userDetails && (
                <Menu.Item
                  key="user-avatar"
                  style={{ backgroundColor: "#09132b" }}
                >
                  <Dropdown overlay={menu}>
                    <img
                      alt="User's Profile"
                      src={userDetails.avatar_url}
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "10px",
                      }}
                    />
                  </Dropdown>
                </Menu.Item>
              )}
            </Menu>
          </Col>
          <Col xxl={4} xl={4} lg={4} xs={2} md={1} sm={2} />
        </Row>
      </Header>
    </Layout>
  );
};
export default Navbar;
