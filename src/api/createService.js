import axios from "axios";
import { createNotification } from "../components/notifications/notify";

export const handleOk = async (name, database, version, username, password) => {
  //console.log(name, database, version);
  if (name.length === 0) {
    // Error Notification
    createNotification("error", "Please enter a cluster name.");
    return 0;
  }
  try {
    var response = await axios.post(
      `${process.env.REACT_APP_SERVER_URI}/createservice`,
      {
        UserID: JSON.parse(localStorage.getItem("details")).login,
        Db: {
          Type: database,
          Name: name,
          username: username,
          password: password,
        },
        version: version,
      },
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("details")).jwttoken
          }`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};
