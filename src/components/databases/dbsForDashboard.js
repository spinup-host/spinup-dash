import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "./db.css";

const DatabaseForDashboard = (props) => {
  const dataBaseSelected = props.databaseSelected;
  const databaseRendering = props.databaseRendering;      
  var imageLink="";  
  if(databaseRendering==="postgres"){
      imageLink="https://softwareengineeringdaily.com/wp-content/uploads/2016/10/PostgreSQL.png";
  }
  if(databaseRendering==="mysql"){
    imageLink="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png";
  }
  if(databaseRendering==="ectd"){
      imageLink="https://dbdb.io/media/logos/etcd.png";
  }  

  const renderDb = () => {    
    if (databaseRendering === dataBaseSelected) {        
      return (
        <div className="databaseSelected">
          <LazyLoadImage
            alt={databaseRendering}
            className="imageDb"
            effect="blur"
            src={imageLink} // use normal <img> attributes as props
          />                    
        </div>
      );
    } else {
      return(
        <div className="databaseRendered">
          <LazyLoadImage
            alt={databaseRendering}
            className="imageDb"
            effect="blur"
            src={imageLink} // use normal <img> attributes as props
          />                  
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
