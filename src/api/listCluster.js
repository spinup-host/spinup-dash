import axios from 'axios';
import { createNotification } from '../components/notifications/notify';

export const getClusters = async () => {
  try {
    axios.defaults.headers.common = {
      'x-api-key': JSON.parse(localStorage.getItem('details')).apikey
    };
    let response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/listcluster`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('details')).jwttoken}`
      }
    });
    return response;
  } catch {
    createNotification('error', 'Error in fetching your clusters!');
    return 500;
  }
};
