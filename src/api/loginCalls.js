// import axios from "axios";

const loginUrl = "https://github.com/login/oauth/authorize";
const client_id = "77a7c0a7c7657aa00e3b";

export const loginOauth = async () => {
  if (client_id === "none") {
    console.log("no client github id");
    return;
  }
};
