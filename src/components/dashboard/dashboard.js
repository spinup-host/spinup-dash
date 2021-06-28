import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../navbar/navbar";
import AllCluster from "../allcluster/allcluster";

import { useSelector } from "react-redux";

const Dashboard = () => {
  var history = useHistory();

  const userDetails = useSelector((state) => state.userLogs);

  useEffect(() => {
    if (!userDetails.username) {
      history.push("/");
    }
  }, []);

  return (
    <>
      <Navbar userDetails={userDetails} />
      <AllCluster />
    </>
  );
};

export default Dashboard;
