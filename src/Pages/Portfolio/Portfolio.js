import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { recentPortfolioData } from "./constants";

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
          {recentPortfolioData?.map((item, idx) => {
            return (
              <div className="Portfolio-cards-section-portfolio" key={idx}>
                <img src={item?.imgSrc} alt={item?.portfolioTitle} />
                <div className="Portfolio-cards-section-portfolio-hover">
                  <h4>{item?.portfolioTitle}</h4>
                  <button
                    className="zoom-button"
                    onClick={() => {
                      navigate(`/portfolio/details/${item?.id}`);
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
