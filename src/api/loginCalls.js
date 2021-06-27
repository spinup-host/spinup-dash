import axios from "axios";

const loginUrlToken = "http://localhost:3001/githubAuth";
const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const loginOauth = async (code) => {    
  if(code){
      var FormWithCode = new FormData();
      FormWithCode.append('code',code);
      var res=await axios.post(loginUrlToken,FormWithCode,config);      
      return res;
  }    
  else{
    var res={
      data:"No GitHub Code"
    }    
    return res;
  }
};
