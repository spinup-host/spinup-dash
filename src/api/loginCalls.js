import axios from "axios";

// var tempPortForLoginLocal="http://localhost:3001/githubAuth";
//use this url if using local machine server i.e. node index.js

const loginUrlToken = process.env.REACT_APP_GITHUB_SERVER;
// const loginUrlToken=tempPortForLoginLocal;

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const loginOauth = async (code) => {
  if (code) {
    try {
      var res = await axios.post(loginUrlToken, { code: code }, config);      
      return res;
    } catch (e) {
      console.log(e);
      var sendError={
        status:"500",
        message:"Server error!"
      }
      return sendError;
    }
  } else {
    var resp = {
      data: "No GitHub Code",
    };
    return resp;
  }
};
