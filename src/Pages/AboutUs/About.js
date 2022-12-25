import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// manual modules
import "./About.scss";

function About() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "A.K. Dream House - About us";
  }, []);
  return (
    <div className="About">
      <div className="contact-us-page-container">
        <div className="contact-us-page-header">
          <h1 className="gradient__text">About us</h1>
          <h3>Innovative & Interior Designer Experts</h3>
          <p>
            The possibilities are beyond your imagination.
            <br />
            <span>Feel free to contact us.</span>
          </p>
          <button
            onClick={() => navigate("/conact-us")}
            className="get-in-touch"
          >
            Let's connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
