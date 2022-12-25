import React from "react";

// manual modules
import "./Loader.scss";

function Loader() {
  return (
    <div className="loader">
      <div className="loader-isometric">
        <div className="loader-isometric-box"></div>
        <div className="loader-isometric-box"></div>
        <div className="loader-isometric-box"></div>
        <div className="loader-isometric-box"></div>
      </div>
    </div>
  );
}

export default Loader;
