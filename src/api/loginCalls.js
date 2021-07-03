import axios from "axios";

const loginUrlToken = process.env.REACT_APP_GITHUB_SERVER;
const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const loginOauth = async (code) => {
  if (code) {
    var FormWithCode = new FormData();
    FormWithCode.append("code", code);
    var res = await axios.post(loginUrlToken, FormWithCode, config);
    return res;
  } else {
    var res = {
      data: "No GitHub Code",
    };
    return res;
  }
};
