import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioProjects } from "../../assets/portfolios";

// manual modules
import "./Portfolio.scss";

function Portfolio() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "A.K. Dream House - Portfolio";
  }, []);

  const letGoHandlar = () => {
    window.scroll({ top: 640, behavior: "smooth" });
  };

  return (
    <div className="Portfolio">
      <div className="contact-us-page-container">
        <div className="contact-us-page-header">
          <h1 className="gradient__text">Portfolios</h1>
          <h3>Our collections of Arts</h3>
          <p>
            Our designs are greatly subjective and beyond the imagination.
            <br />
            <span>Go down to see some...</span>
          </p>
          <button onClick={letGoHandlar} className="get-in-touch">
            Let's see
          </button>
        </div>
      </div>

      <div className="Portfolio-cards-section ak__ak mb-5">
        <h2 className="gradient__text text-center">OUR RECENT PORTFOLIO's</h2>
        <div className="inner-portfolio">
          {portfolioProjects?.map((item, idx) => {
            return (
              <div className="Portfolio-cards-section-portfolio" key={idx}>
                <img
                  src={item?.projectImages[0].imageLink}
                  alt={item?.portfolioTitle}
                />
                <div className="Portfolio-cards-section-portfolio-hover">
                  <h4>{item?.projectName}</h4>
                  <button
                    className="zoom-button"
                    onClick={() => {
                      navigate(`/portfolio/details?portfolio=${item?.projectID}`);
                    }}
                  >
                    learn more...
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
