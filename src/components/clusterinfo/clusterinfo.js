import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Navbar from "../navbar/navbar";
import ClusterDetails from "../clusterdetails/clusterdetails";
import { loggingIn } from "../../actions/logIn";

const ClusterInfo = () => {
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
      <Navbar userDetails={user} />
      <ClusterDetails />
    </>
  );
};
export default ClusterInfo;
