import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import "./db.css";

const DatabaseForDashboard = (props) => {
  const dataBaseSelected = props.databaseSelected;
  const databaseRendering = props.databaseRendering;      

  var postgresLink,mysqlLink,ectdLink;
  var imageLink="";  
  if(databaseRendering==="postgres"){
      imageLink="https://softwareengineeringdaily.com/wp-content/uploads/2016/10/PostgreSQL.png";
      postgresLink=imageLink;
  }
  if(databaseRendering==="mysql"){
    imageLink="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png";
    mysqlLink=imageLink;
  }
  if(databaseRendering==="ectd"){
      imageLink="https://dbdb.io/media/logos/etcd.png";
      ectdLink=imageLink;
  }  
  //checks if image has been cached
  function isCached(src) {
    var img = new Image();
    img.src = src;
    var complete = img.complete;
    img.src = "";
    return complete;
}

  const renderDb = () => {    
    if (databaseRendering === dataBaseSelected) {        
      return (
        <div className="databaseSelected">                            
           <LazyLoadImage
            alt={databaseRendering}
            effect="blur"
            className="imageDb"            
            src={imageLink} // use normal <img> attributes as props
            threshold={120}                         
            visibleByDefault={isCached(imageLink)}                            
          />                     
        </div>
      );
    } else {
      return(
        <div className="databaseRendered">                                   
          <LazyLoadImage
            alt={databaseRendering}
            effect="blur"    
            className="imageDb"     
            threshold={120}   
            src={imageLink} // use normal <img> attributes as props            
            visibleByDefault={isCached(imageLink)}                               
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
