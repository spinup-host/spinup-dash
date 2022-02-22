import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../navbar/navbar";
import AllCluster from "../allcluster/allcluster";

import { useSelector, useDispatch } from "react-redux";
import { loggingIn } from "../../actions/logIn";

const Dashboard = () => {
  var history = useHistory();
  const dispatch = useDispatch();
  var userDetails = useSelector((state) => state.userLogs);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userDetails.username && !localStorage.getItem("details")) {
      history.push("/login");
    } else {
      dispatch(loggingIn(JSON.parse(localStorage.getItem("details"))));
    }
  }, []);

  useEffect(() => {
    setUser(userDetails);
  }, [userDetails]);

  return (
    <>
      <Navbar userDetails={user} />
      <AllCluster />
    </>
  );
};

export default Dashboard;
