import React from "react";
import first from "./../../../../assets/images/home-carousel/1.jpg";
import second from "./../../../../assets/images/home-carousel/2.jpg";
import third from "./../../../../assets/images/home-carousel/3.jpg";
import fourth from "./../../../../assets/images/home-carousel/4.jpg";
import fifth from "./../../../../assets/images/home-carousel/5.jpeg";
import sixth from "./../../../../assets/images/home-carousel/6.jpg";

const HomeCarousel = () => {
  return (
    <div className="home-container-carousel">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={fourth}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={second}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={third}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={second}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={third}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={fifth}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={third}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={fourth}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={fifth}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={first}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={fifth}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={sixth}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={fifth}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={sixth}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={first}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={sixth}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={first}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
            <img
              src={third}
              className="d-block w-100 home-container-carousel-largeImg"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
