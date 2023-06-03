import React, { useEffect, useState } from "react";
import axios from "axios";
import Processing from "./Processing";

function Phase3({ data }) {
  const defaultimage =
    "https://plus.unsplash.com/premium_photo-1661901800743-0a90a14d7f44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1cnJlZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const handleClick = () => {
    navigator.clipboard.writeText(data);
    alert("Link Copied");
  };

  return (
    <div className="Phase3">
      <img
        src="https://img.icons8.com/fluency/48/null/checked.png"
        className="tick"
        alt="check"
      />
      <p>Uploaded Successfully!</p>
      <img src={data} className="image" alt="image" />
      <div className="copyLink">
        <p>{data.substring(0, 60)}...</p>
        <button onClick={handleClick}>Copy Link</button>
      </div>
    </div>
  );
}

export default Phase3;
