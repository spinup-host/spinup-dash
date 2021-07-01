import React, { useEffect, useState } from "react";
import "./login.css";
import Logo from "../../assets/images/Logo.png";
import { useDispatch } from "react-redux";
import { loggingIn } from "../../actions/logIn";
import { useHistory } from "react-router-dom";
import { loginOauth } from "../../api/loginCalls";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

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
  const handleClick = () => {
    window.location.href = process.env.REACT_APP_URL;
  };

  useEffect(() => {
    var code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    //generate user data from oauth and dispatch to redux
    async function getUserData(code) {
      setIsLoading(true);
      var res = await loginOauth(code);
      if (res.data !== "No GitHub Code") {
        localStorage.setItem("details", JSON.stringify(res.data));
        dispatch(loggingIn(res.data));//redux storage can be rmoved later maybe...
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
          <div className="subTitle">Connect with GitHub to get started</div>
          <button onClick={handleClick} className="Button-primary">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
              width="22px"
              alt="GitHub Logo"
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
    </div>
  );
};

export default Login;
