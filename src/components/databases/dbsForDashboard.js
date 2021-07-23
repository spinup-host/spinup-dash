import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Spin } from "antd";

import "./db.css";

const DatabaseForDashboard = (props) => {
  const dataBaseSelected = props.databaseSelected;
  const databaseRendering = props.databaseRendering;      
  const [loadingImage,setLoading]=useState(true);

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
          {loadingImage ?<Spin/>:null}
           <LazyLoadImage
            alt={databaseRendering}
            className="imageDb"            
            src={imageLink} // use normal <img> attributes as props
            afterLoad={()=>setLoading(false)}          
          />                     
        </div>
      );
    } else {
      return(
        <div className="databaseRendered">
          {loadingImage ?<Spin/>:null}
          <LazyLoadImage
            alt={databaseRendering}
            className="imageDb"            
            src={imageLink} // use normal <img> attributes as props
            afterLoad={()=>setLoading(false)}      
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
