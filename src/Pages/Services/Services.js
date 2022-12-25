import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// manual modules
import "./Services.scss";
import blog01 from "../../assets/blog01.jpg";
import blog02 from "../../assets/blog02.jpg";
import blog03 from "../../assets/blog03.jpeg";
import blog04 from "../../assets/blog04.jpg";
import blog05 from "../../assets/blog05.jpg";
import blog06 from "../../assets/blog02.jpg";
import { Link } from "react-router-dom";
import Features from "../Home/Components/features/Features";
import CTA from "../../Components/cta/CTA";
import Gallery from "../../Components/Gallery/Gallery";
import { servicesPopUpImages } from "./constants";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Services() {
  useEffect(() => {
    document.title = "A.K. Dream House - Services";
  }, []);

  const letGoHandlar = () => {
    window.scroll({ top: 640, behavior: "smooth" });
  };

  return (
    <div className="Services">
      <div className="Services-header">
        <h1 className="gradient__text">Our Services</h1>
        <h3>possibilities are beyond the imagination...</h3>
        <p>
          Please view our portfolio of recent work, or contact us and discuss
          your project.
          <br />
          <span>Feel free to contact us.</span>
        </p>
        <button className="get-in-touch" onClick={letGoHandlar}>
          Let's Go
        </button>
      </div>

      <div className="Services-cards-section ak__ak">
        <div className="Services-cards-section-heading">
          <h2 className="gradient__text">SERVICES WE PROVIDE</h2>
          <div className="Services-cards-section-cards">
            <div className="Services-cards-section-cards-cardBox">
              <img src={blog01} alt="card-img" />
              <div className="Services-cards-section-cards-cardBox-hoverContent">
                <p className="gradient__text">Architectural Design</p>
                <Link to="/services/akdream-house">learn more...</Link>
              </div>
            </div>
            <div className="Services-cards-section-cards-cardBox">
              <img src={blog02} alt="card-img" />
              <div className="Services-cards-section-cards-cardBox-hoverContent">
                <p className="gradient__text">Interior Design</p>
                <Link to="/services/akdream-house">learn more...</Link>
              </div>
            </div>
            <div className="Services-cards-section-cards-cardBox">
              <img src={blog03} alt="card-img" />
              <div className="Services-cards-section-cards-cardBox-hoverContent">
                <p className="gradient__text">Landscape Design</p>
                <Link to="/services/akdream-house">learn more...</Link>
              </div>
            </div>
            <div className="Services-cards-section-cards-cardBox">
              <img src={blog04} alt="card-img" />
              <div className="Services-cards-section-cards-cardBox-hoverContent">
                <p className="gradient__text">3D Elevation</p>
                <Link to="/services/akdream-house">learn more...</Link>
              </div>
            </div>
            <div className="Services-cards-section-cards-cardBox">
              <img src={blog05} alt="card-img" />
              <div className="Services-cards-section-cards-cardBox-hoverContent">
                <p className="gradient__text">Floor Planning</p>
                <Link to="/services/akdream-house">learn more...</Link>
              </div>
            </div>
            <div className="Services-cards-section-cards-cardBox">
              <img src={blog06} alt="card-img" />
              <div className="Services-cards-section-cards-cardBox-hoverContent">
                <p className="gradient__text">Structure Drawing</p>
                <Link to="/services/akdream-house">learn more...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Features />
      <CTA />

      <div className="Services-projects">
        <h2 className="gradient__text">OUR RECENT PROJECTS</h2>
        <div className="Services-projects-carousel">
          <div className="Services-projects-carousel-click-to-open">
            <h4>click image to open project images</h4>
          </div>
          <Carousel
            autoPlay={true}
            autoPlaySpeed={2000}
            transitionDuration={500}
            infinite={true}
            responsive={responsive}
          >
            {servicesPopUpImages.map((item, idx) => {
              return (
                <div key={idx} className="Services-projects-carousel-item">
                  <Gallery images={item.images} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Services;
