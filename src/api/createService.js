import axios from "axios";
import { notification } from "antd";

export const handleOk = async (name, database, version) => {
  console.log(name, database, version);
  if (name.length === 0) {
    //Ant Design Error Notification
    notification.error({
      message: "Please enter a cluster name.",
      description: "The cluster name is required.",
    });
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
