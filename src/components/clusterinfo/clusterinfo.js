import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

import Navbar from "../navbar/navbar";
import ClusterDetails from "../clusterdetails/clusterdetails";

const ClusterInfo = () => {
  var history = useHistory();

  var userDetails = useSelector((state) => state.userLogs);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userDetails.username && !localStorage.getItem("details")) {
      history.push("/");
    } else {
      userDetails = JSON.parse(localStorage.getItem("details"));
      console.log(JSON.parse(localStorage.getItem("details")));
      setUser(userDetails);
    }
  }, []);

  return (
    <>
      <Navbar userDetails={user} />
      <ClusterDetails />
    </>
  );
};
export default ClusterInfo;
