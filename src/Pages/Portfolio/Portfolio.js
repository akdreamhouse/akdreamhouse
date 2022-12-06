import React, { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";

// manual modules
import "./Portfolio.scss";

function Portfolio() {
  useEffect(() => {
    document.title = "A.K. Dream House - Portfolio";
  }, []);

  return (
    <div className="Portfolio">
      <Loader />
    </div>
  );
}

export default Portfolio;
