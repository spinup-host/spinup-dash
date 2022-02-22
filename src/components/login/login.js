import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Logo.png";
import { useDispatch } from "react-redux";
import { loggingIn } from "../../actions/logIn";
import { useHistory } from "react-router-dom";
import { loginAlt, loginOauth } from "../../api/loginCalls";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import NotificationContainer from "../notifications/container";
import { createNotification } from "../notifications/notify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import usericon from "../../assets/images/usericon2.png"

import "./login.css";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
//this is for loading

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey,setApiKey] = useState("");
  const handleClick = () => {
    const redirect = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
    window.location.href = redirect;
  };
  
  const handleKeyChange = (e) =>{
    setApiKey(e.target.value)
  }


  async function handleButtonClick() {
   let res = await loginAlt(apiKey)
   if(res.status && res.status != 200){
    setIsLoading(false);
    createNotification("error", res.message);
   }
   if(res.status && res.status == 401){
     setIsLoading(false);
     createNotification("error","Unauthorized")
   }
   if (res.status && res.status === 200 && res.data !== "No GitHub Code"){
    const userdetails = {
    avatar_url: usericon,
    jwttoken: "",
    login: "testuser",
    name: "testuser",
    token: "",
    apikey: `${apiKey}`
   }
   localStorage.setItem("details",JSON.stringify(userdetails));
   dispatch(loggingIn(userdetails))
   history.push("/dashboard")
  } else{
    setIsLoading(false)
  }

  }

  useEffect(() => {
    var code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    //generate user data from oauth and dispatch to redux
    async function getUserData(code) {
      setIsLoading(true);
      var res = await loginOauth(code);
      if (res.status && res.status !== 200) {
        setIsLoading(false);
        createNotification("error", res.message);
      }
      if (res.status && res.status === 200 && res.data !== "No GitHub Code") {
        localStorage.setItem("details", JSON.stringify(res.data));
        dispatch(loggingIn(res.data)); //redux storage can be rmoved later maybe...
        setIsLoading(false);
        history.push("/dashboard");
      } else {
        setIsLoading(false); //add notification here for error
      }
    }
    getUserData(code);
  }, []);

  return (
    <div className="Background">
      {!isLoading ? (
        <div className="Rectangle">
          <div className="LogoStyle">
            <img src={Logo} alt="logo"></img>
          </div>
          <div className="Title">Welcome to SpinUp</div>
          <div style={{color: "#dcdce5"}}>
            <span >Enter Api Key: </span>
            <input value={apiKey} type="text" style={{color:"#06071d",marginLeft: "5px"}} onChange={handleKeyChange}></input>
            <button style={{backgroundColor:"#42e8e0",margin:"5px",color:"#06071d"}} onClick={handleButtonClick}>Go!</button>
            <br></br>
            <hr></hr>
            <div className="text-style" style={{color:"#dcdce5"}}>OR</div>
          </div>
          <button onClick={handleClick} className="Button-primary">
            <LazyLoadImage
              width="22px"
              alt="GitHub Logo"
              effect="blur"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" // use normal <img> attributes as props
            />
            <div className="text-style">Get started with GitHub</div>
          </button>
        </div>
      ) : null}
      <HashLoader
        color="#42e8e0"
        loading={isLoading}
        css={override}
        size={80}
      />
      <NotificationContainer />
    </div>
  );
};

export default Login;
