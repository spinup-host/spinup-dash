import React from "react";
import 'antd/dist/antd.css';
import './header.css'
import Logo from "../../assets/images/Logo.png";

const Header = () =>{
    return(
        <div>
            <div className="headRect">
                <div className="icon">
                <img src={Logo} alt="logo"></img>
                </div>
                <div>
                {/* needs work for crealte a cluster button */}
                <button className="clusterMaker">
                    Create Cluster
                </button>
                </div>
            </div>
        </div>
    );
}
export default Header;