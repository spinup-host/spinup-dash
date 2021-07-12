import React, { useEffect, useState } from "react";
import { Col, Row, Input, Avatar } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//css
import "./profile.css";

const Profile = () => {
  var history = useHistory();
  var userDetails = useSelector((state) => state.userLogs);
  const [user, setUser] = useState(null);

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
      <Row style={{ marginTop: "10vh" }}>
        <Col>
          <Row>
            <Avatar
              shape="square"
              src={userDetails.avatarUrl}
              className="avatarImage"
              alt="Github User Pic"
            />
          </Row>
          <Row style={{ marginTop: "5vh" }}>
            <p className="inputTitles">Full Name</p>
            <Input
              bordered={false}
              style={{
                backgroundColor: "#394150",
                color: "white",
                height: "40px",
                borderRadius: "5px",
              }}
              disabled
              value={userDetails.name}
            />
          </Row>
          <Row style={{ marginTop: "5vh" }}>
            <p className="inputTitles">Github Username</p>
            <Input
              bordered={false}
              style={{
                backgroundColor: "#394150",
                color: "white",
                height: "40px",
                borderRadius: "5px",
              }}
              disabled
              value={"@" + userDetails.username}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
