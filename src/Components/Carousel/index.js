import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./constants";

import "./style.scss";
import { elevationImages } from "../../utils/constants/elevationImages";

function CarouselWrapper() {
  return (
    <div className="carousel_wrapper">
      <h3 className="carousel_wrapper-heading">Elevation</h3>
      <p className="carousel_wrapper-description">
        An Elevation is an image that shows the height, length, width and
        appearance of a building or structure.
      </p>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={2500}
        transitionDuration={500}
        infinite={true}
        responsive={responsive}
      >
        {elevationImages.map((item) => {
          return (
            <div className="carousel_wrapper-inner">
              <img
                src={item.imageUrl}
                alt="carausel img"
                className="carousel_wrapper-inner-image"
              />
            </div>
          );
        })}
      </Carousel>
      <div className="carousel_wrapper-see_more">
        <button className="carousel_wrapper-see_more-btn">see more...</button>
      </div>
    </div>
  );
}

export default CarouselWrapper;
