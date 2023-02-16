import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./constants";

import "./style.scss";
import Button from "../Button";
import Heading from "../Heading";
import ImagePopup from "../ImagePopup";

const CarouselWrapper = ({ images, title }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const ImagePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const setImageUrlHandlar = (e) => {
    setImageUrl(e);
    ImagePopupToggle();
  };
  return (
    <>
      <div className="carousel_wrapper">
        <div className="carousel_wrapper-heading">
          <Heading title={title} />
          <p className="carousel_wrapper-description">
            An Elevation is an image that shows the height, length, width and
            appearance of a building or structure.
          </p>
        </div>
        <Carousel
          autoPlay={true}
          autoPlaySpeed={2500}
          transitionDuration={500}
          infinite={true}
          responsive={responsive}
        >
          {images.map((item, index) => {
            return (
              <div className="carousel_wrapper-inner" key={index}>
                <div className="carousel_wrapper-inner-img">
                  <img
                    onClick={() => setImageUrlHandlar(item.imageUrl)}
                    src={item.imageUrl}
                    alt="carausel img"
                    className="carousel_wrapper-inner-image"
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="carousel_wrapper-see_more">
          <Button title="See more" />
        </div>
        {showPopup && (
          <ImagePopup imgUrl={imageUrl} toggleHandlar={ImagePopupToggle} />
        )}
      </div>
    </>
  );
};

export default CarouselWrapper;
