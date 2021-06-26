import axios from "axios";

const loginUrlToken = "needs api here";
const client_id=process.env.REACT_APP_CLIENT_ID
const client_secret=process.env.REACT_APP_CLIENT_SECRET

export const loginOauth = async (code) => {
  var tempUrl=loginUrlToken+code;    
  if(code){
      // include some server side code api connection      
      //send code to backend and receive token and send to redux 
  }    
  else{
    console.log("No github code");
  }
};
