import React from "react";
import "./db.css";

const DatabaseForDashboard = (props) => {
  const dataBaseSelected = props.databaseSelected;
  const databaseRendering = props.databaseRendering;      
  var imageLink="";

  if(databaseRendering==="postgresql"){
      imageLink="https://softwareengineeringdaily.com/wp-content/uploads/2016/10/PostgreSQL.png";
  }
  if(databaseRendering==="mysql"){
    imageLink="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png";
  }
  if(databaseRendering==="ectd"){
      imageLink="https://dbdb.io/media/logos/etcd.png";
  }
  console.log(imageLink);

  const renderDb = () => {    
    if (databaseRendering == dataBaseSelected) {
        console.log("db");
      return (
        <div className="databaseSelected">
          <img src={imageLink} alt={databaseRendering} className="imageDb"></img>
        </div>
      );
    } else {
      return(
        <div className="databaseRendered">
        <img src={imageLink} alt={databaseRendering} className="imageDb"></img>
        </div>
      );
    }
  };

  return (
      <div>
      {renderDb()}
      </div>
  );
};

export default DatabaseForDashboard;
