import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from "react-router-dom";

import "./PortfolioDetailPage.scss";
import { portfolioProjects } from "../../assets/portfolios";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function PortfolioDetailPage(props) {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("portfolio");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fileredPortfolio = portfolioProjects.filter(
      (item) => item.projectID === Number(id)
    );
    setPortfolio(fileredPortfolio[0]);
  }, [id]);

  console.log(portfolio);

  return (
    <div className="PortfolioDetailPage">
      <div className="PortfolioDetailPage-container">
        <div className="PortfolioDetailPage-container-details">
          <div className="PortfolioDetailPage-container-details-left">
            <h2>AK Dream House</h2>
            <small className="text-secondary">Project brief details</small>
            <ul className="PortfolioDetailPage-container-details-left-list">
              <li>
                <b>
                  TITLE :-<span> {portfolio?.projectName} </span>
                </b>
              </li>
              <li>
                <b title="AK Dream House">
                  PROJECT ONWER :- <span> {portfolio?.projectOnwer}</span>
                </b>
              </li>
              <li>
                <b>
                  PROJECT CATEGORY :-
                  <span> {portfolio?.projectCategory} </span>
                </b>
              </li>
              <li>
                <b>
                  PROJECT AREA SIZE :-
                  <span> {portfolio?.projectAreaSize}</span>
                </b>
              </li>
              <li>
                <b>
                  STATUS :- <span> {portfolio?.projectStatus} </span>
                </b>
              </li>
              <li>
                <b>
                  LOCATION :- <span>{portfolio?.projectLocation} </span>
                </b>
              </li>
              <li>
                <b>
                  PROJECT START DATE :-{" "}
                  <span> {portfolio?.projectStartDate}</span>
                </b>
              </li>
              <li>
                <b>
                  PROJECT END DATE :- <span>{portfolio?.projectEndDate}</span>
                </b>
              </li>
              <li>
                <b>
                  WEBSITE :-{" "}
                  <a href={portfolio?.projectWebsite}>
                    {portfolio?.projectWebsite}
                  </a>
                </b>
              </li>
            </ul>

            <div className="my-3">
              <h2>Project's Social Media </h2>
              <span className="social-icons">
                {portfolio.projectSocialMediaLinks &&
                  portfolio?.projectSocialMediaLinks.map((item, idx) => {
                    return (
                      <a href="/" target="_blank">
                        <img
                          src={item?.socialIcon}
                          alt={item?.sociaMediaName}
                        />
                      </a>
                    );
                  })}
              </span>
            </div>
          </div>
          <div className="PortfolioDetailPage-container-details-right">
            {portfolio?.projectImages && (
              <Carousel
                autoPlay={true}
                autoPlaySpeed={2000}
                transitionDuration={1000}
                infinite={true}
                responsive={responsive}
              >
                {portfolio?.projectImages.map((item) => {
                  return <img src={item?.imageLink} alt="dfd" />;
                })}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetailPage;
