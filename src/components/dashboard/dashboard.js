import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../navbar/navbar";
import AllCluster from "../allcluster/allcluster";

import { useSelector } from "react-redux";

const Dashboard = () => {
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
      <Navbar userDetails={user} />
      <AllCluster />
    </>
  );
};

export default Dashboard;
