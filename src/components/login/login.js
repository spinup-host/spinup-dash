import React, { useEffect } from "react";
import "./login.css";
import Logo from "../../assets/images/Logo.png";
import { useDispatch,useSelector } from "react-redux";
import { loggingIn } from "../../actions/logIn";
import { useHistory } from "react-router-dom";

const Login = () => {

  let history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    window.location.href = process.env.REACT_APP_URL;
  };

  useEffect(() => {
    var code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
  }, []);

  return (
    <div className="Background">
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
    </div>
  );
};

export default Login;
