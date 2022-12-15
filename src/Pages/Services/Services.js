import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";

// manual modules
import "./Services.scss";

function Services() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.title = "A.K. Dream House - Services";

    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  if (loader) return <Loader />;
  return (
    <div className="Services">
      <div className="Services-header">
        <h1 className="gradient__text">Our Services</h1>
        <h3>We'd love to hear from you</h3>
        <p>
          Please let us know if you have further questions/discussion.
          <br />
          <span>Feel free to contact us.</span>
        </p>
        <button className="get-in-touch">Go to services</button>
      </div>
    </div>
  );
}

export default Services;
