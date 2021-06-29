import React from "react";
import "./dbversions.css";

const DatabaseVersion = (props) => {
  var selectedVersion = props.selectedVersion;
  var currVersion = props.currVersion;

  const renderVersions = () => {
    if (selectedVersion === currVersion) {
      return <div className="selectedVersion">{selectedVersion}</div>;
    } else {
      return <div className="unSelectedVersion">{currVersion}</div>;
    }
  };

  return (
    <div>
      {renderVersions()}
    </div>
  );
};

export default DatabaseVersion;
