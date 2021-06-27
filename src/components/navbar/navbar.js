import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Layout, { Header } from "antd/lib/layout/layout";
import { Col, Menu, Row, Button, Dropdown } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import Logo from "../../assets/images/Logo.png";
import { loggingOut } from "../../actions/logOut";

import "antd/dist/antd.css";

const Navbar = () => {
  var history = useHistory();

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userLogs);

  const handleLogout = () => {
    dispatch(loggingOut());
    history.push("/");
  };

  useEffect(() => {
    if (!userDetails.username) {
      history.push("/");
    }
  }, []);

  const menu = (
    <Menu style={{ backgroundColor: "#212936" }}>
      <Menu.Item
        key="username"
        style={{ color: "white", pointerEvents: "none" }}
      >
        <b>{userDetails.username}</b>
      </Menu.Item>
      <Menu.Item key="name" style={{ color: "white", pointerEvents: "none" }}>
        {userDetails.name}
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
      <Header style={{ padding: "0" }}>
        <Row>
          <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
          <Col xxl={17} xl={17} lg={17} xs={22} md={20} sm={22}>
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
                backgroundColor: "#121826",
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
                      src={userDetails.avatarUrl}
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
          <Col xxl={4} xl={4} lg={4} md={1} />
        </Row>
      </Header>
    </Layout>
  );
};
export default Navbar;
