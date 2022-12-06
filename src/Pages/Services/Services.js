import React, { useEffect } from "react";
import Loader from "../../Components/Loader/Loader";

// manual modules
import "./Services.scss";

function Services() {

  useEffect(() => {
    document.title = "A.K. Architect - Services";
  }, []);

  return (
    <div className="Services">
      <Loader />
    </div>
  );
}

export default Services;
