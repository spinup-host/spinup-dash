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
    var FormWithCode = new FormData();
    FormWithCode.append("code", code);
    try {
      var res = await axios.post(loginUrlToken, FormWithCode, config);       
      return res;
    } catch (error) {
      //change error based on Go server later
      var res={
        status:"500",
        message:"Server error"
      }    
      return res;
    }
  } else {
    var res = {
      data: "No GitHub Code",
    };
    return res;
  }
};
