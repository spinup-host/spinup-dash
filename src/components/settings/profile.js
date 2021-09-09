import React, { useEffect, useState } from "react";
import { Col, Row, Input, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//css
import "./profile.css";
import { loggingIn } from "../../actions/logIn";

const Profile = () => {
  var history = useHistory();
  const dispatch = useDispatch();
  var userDetails = useSelector((state) => state.userLogs);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userDetails.username && !localStorage.getItem("details")) {
      history.push("/");
    } else {
      dispatch(loggingIn(JSON.parse(localStorage.getItem("details"))));
    }
  }, []);

  useEffect(() => {
    setUser(userDetails);
  }, [userDetails]);

  return (
    <>
      {user && (
        <Row style={{ marginTop: "10vh" }}>
          <Col>
            <Row>
              <Avatar
                shape="square"
                src={user.avatar_url}
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
                value={user.name}
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
                value={"@" + user.username}
              />
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Profile;
