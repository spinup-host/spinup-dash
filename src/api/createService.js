import axios from "axios";
import { createNotification } from "../components/notifications/notify";

export const handleOk = async (name, database, version) => {
  //console.log(name, database, version);
  if (name.length === 0) {
    // Error Notification    
    createNotification("error","Please enter a cluster name.");
    return 0;
  }
  try {
    var response = await axios.post(`${process.env.REACT_APP_SERVER_URI}`, {
      UserID: "replaceme",
      ClusterName: name,
      Name: database,
      version: version,
    });
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};
