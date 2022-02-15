import axios from "axios";
import { createNotification } from "../components/notifications/notify";

export const handleOk = async (name, database, version, username, password) => {
  //console.log(name, database, version);
  if (name.length === 0) {
    // Error Notification
    createNotification("error", "Please enter a cluster name.");
    return 0;
  }
  var maj_ver = version.split(".")[0];
  var min_ver = "0"
  if (version.includes(".")) {
    min_ver = version.split(".")[1];
  }
  try {
    axios.defaults.headers.common = {
      "x-api-key": JSON.parse(localStorage.getItem("details")).apikey,
    };
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
        version: {
          maj: parseInt(maj_ver),
          min: parseInt(min_ver)
        }
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
    return e;
  }
};
