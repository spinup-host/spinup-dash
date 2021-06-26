import React from "react";

import Layout, { Header } from "antd/lib/layout/layout";
import { Col, Menu, Row, Button } from "antd";

import Logo from "../../assets/images/Logo.png";

import "antd/dist/antd.css";

const Navbar = () => {
  return (
    <Layout>
      <Header style={{ padding: "0" }}>
        <Row>
          <Col xxl={3} xl={3} lg={3} xs={2} md={3} sm={2} />
          <Col xxl={16} xl={16} lg={18} xs={22} md={20} sm={22}>
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
              <Menu.Item>
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
            </Menu>
          </Col>
          <Col xxl={5} xl={5} lg={1} md={1} />
        </Row>
      </Header>
    </Layout>
  );
};
export default Navbar;
