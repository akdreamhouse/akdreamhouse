import React from "react";
import CarouselWrapper from "../../components/Carousel";
import HomeCarousel from "./components/Home-carousel";
import HomeAbout from "./components/HomeAbout";
import HomeServices from "./components/HomeServices";
import { elevationImages } from "../../constants/elevation";
import Offers from "../../components/Offer";

import Testimonials from "../../components/Testimonials";

import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <HomeCarousel />
      <HomeAbout />
      <HomeServices />
      <CarouselWrapper
        images={elevationImages}
        title="Elevations"
        subtitle="An Elevation is an image that shows the height, length, width and appearance of a building or structure.      "
      />
      <Offers />
      <Testimonials />
    </div>
  );
};

export default Home;
