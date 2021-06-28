import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

import Navbar from "../navbar/navbar";
import ClusterDetails from "../clusterdetails/clusterdetails";

const ClusterInfo = () => {
  var history = useHistory();

  const userDetails = useSelector((state) => state.userLogs);

  //   useEffect(() => {
  //     if (!userDetails.username) {
  //       history.push("/");
  //     }
  //   }, []);

  return (
    <>
      <Navbar userDetails={userDetails} />
      <ClusterDetails />
    </>
  );
};
export default ClusterInfo;
