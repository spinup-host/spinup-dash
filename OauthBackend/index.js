// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const formidable = require("express-formidable");
// const { default: axios } = require("axios");

// app.use(cors());
// app.use(formidable());

// app.get("/", (req, res) => {
//   res.send("Testing connection!");
// });

// app.post("/githubAuth", async (req, res) => {
//   var code = req.fields.code;
//   var client_id = process.env.CLIENT_ID;
//   var client_secret = process.env.CLIENT_SECRET;
//   var url = "https://github.com/login/oauth/access_token";
//   var data = {
//     code: code,
//     client_id: client_id,
//     client_secret: client_secret,
//   };
//   var ans = await axios.post(url, data, {
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   var access_token = ans.data.access_token;
//   var userDataUrl = "https://api.github.com/user";
//   var tokenData = await axios.get(userDataUrl, {
//     headers: {
//       Authorization: `token ${access_token}`,
//     },
//   });
//   var user = {
//     username: tokenData.data.login,
//     avatarUrl: tokenData.data.avatar_url,
//     name: tokenData.data.name,
//     token: access_token,
//   };
//   res.send(user);
// });

// app.listen(3001, () => {
//   console.log("Server ready");
// });
