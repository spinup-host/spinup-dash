import axios from "axios";
import { createNotification } from "../components/notifications/notify";

export const getClusters = async () => {
  try {
    var response = await axios.get(process.env.REACT_APP_LIST_URI, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("details")).jwttoken
        }`,
      },
    });
    return response;
  } catch {
    createNotification("error", "Error in fetching your clusters!");
    return 500;
  }
};
