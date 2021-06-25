import React from "react";
import "./login.css";
import Logo from "../../assets/images/Logo.png";

const Login = () => {
  return (
    <div className="Background">
      <div className="Rectangle">
        <div className="LogoStyle">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="Title">Welcome to SpinUp</div>
        <div className="subTitle">Connect with GitHub to get started</div>
        <button className="Button-primary">
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
