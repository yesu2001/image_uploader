import React from "react";
import "../App.css";

function Processing() {
  return (
    <div className="Container">
      <div className="Processing">
        <p>Uploading</p>
        <div className="bar">
          <div className="loading"></div>
        </div>
      </div>
    </div>
  );
}

export default Processing;
