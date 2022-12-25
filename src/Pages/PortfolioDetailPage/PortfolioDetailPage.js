import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from "../Home/Components/blog/imports";

import "./PortfolioDetailPage.scss";

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

function PortfolioDetailPage() {
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
                  TITLE :-<span> AK Dream House </span>
                </b>
              </li>
              <li>
                <b title="AK Dream House">
                  PROJECT ONWER :- <span> dr. Deep Singh Raj </span>
                </b>
              </li>
              <li>
                <b>
                  PROJECT CATEGORY :- <span> Residential </span>
                </b>
              </li>
              <li>
                <b>
                  PROJECT AREA SIZE :- <span> 70*50 Sq Ft </span>
                </b>
              </li>
              <li>
                <b>
                  STATUS :- <span> Done </span>
                </b>
              </li>
              <li>
                <b>
                  LOCATION :- <span> Indore MP India </span>
                </b>
              </li>
              <li>
                <b>
                  PROJECT START DATE :- <span> 14-April, 2020 </span>
                </b>
              </li>
              <li>
                <b>
                  PROJECT END DATE :- <span>20-January, 2021</span>
                </b>
              </li>
              <li>
                <b>
                  WEBSITE :-{" "}
                  <a href="https://akdreamhouse.com">akdreamhouses.com</a>
                </b>
              </li>
            </ul>

            <div className="my-3">
              <h2>Project's Social Media </h2>
              <span className="social-icons">
                <a href="/" target="_blank">
                  <img src="images/icons/facebook.png" alt="facebook" />
                </a>
                <a href="/" target="_blank">
                  <img src="images/icons/instagram.png" alt="insta" />
                </a>
                <a href="/" target="_blank">
                  <img src="images/icons/linkdin.png" alt="linkdin" />
                </a>
                <a href="/" target="_blank">
                  <img src="images/icons/twitter.png" alt="twitter" />
                </a>
                <a href="/" target="_blank">
                  <img src="images/icons/youtube.png" alt="youtube" />
                </a>
              </span>
            </div>
          </div>
          <div className="PortfolioDetailPage-container-details-right">
            <Carousel
              autoPlay={true}
              autoPlaySpeed={2000}
              transitionDuration={1000}
              infinite={true}
              responsive={responsive}
            >
              <img src={blog01} alt="dfd" />
              <img src={blog02} alt="dfd" />
              <img src={blog03} alt="dfd" />
              <img src={blog04} alt="dfd" />
              <img src={blog05} alt="dfd" />
              <img src={blog03} alt="dfd" />
              <img src={blog01} alt="dfd" />
              <img src={blog04} alt="dfd" />
              <img src={blog01} alt="dfd" />
              <img src={blog02} alt="dfd" />
              <img src={blog03} alt="dfd" />
              <img src={blog05} alt="dfd" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetailPage;
