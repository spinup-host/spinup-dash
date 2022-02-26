import axios from "axios";
import { createNotification } from "../components/notifications/notify";

export const schedulebackup = async (backupdetails) => {
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_SERVER_URI}/createbackup`,
      {
        db: {
          name: backupdetails.dbname,
          username: backupdetails.username,
          password: backupdetails.password,
        },
        backupenabled: true,
        backup: {
          dest: {
            name: backupdetails.dest,
            bucketName: backupdetails.bucketname,
            apikeyid: backupdetails.apikey,
            apikeysecret: backupdetails.apikeysecret,
          },
          schedule: {
            minute: backupdetails.minute,
            hour: backupdetails.hour,
            dom: "*",
            month: "*",
            dow: "*",
          },
        },
      }
    );
    return response;
  } catch (e) {
    return e;
  }
};

export default schedulebackup;
