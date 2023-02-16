import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "../Heading";
import "./style.scss";

export const responsive = {
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

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-heading">
        <Heading title="Testimonials" />
        <p>A review or recommendation from our client</p>
      </div>
      <Carousel
        autoPlay={false}
        autoPlaySpeed={2500}
        transitionDuration={500}
        infinite={true}
        responsive={responsive}
      >
        <div className="testimonials-Box">
          <img
            className="testimonials-Box__img"
            src="https://www.verywellhealth.com/thmb/-i8lNvry_uFeT4cv4fdNed7YUAM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1345296778-b63b9bafd2d64035b8f53116f1f35f88.jpg"
            alt="img"
          />
          <p className="testimonials-Box__text">
            "{" "}
            <i>
              Ak Dream House has been a quality organization to partner with as
              a subcontractor and his team are well organized and clear on the
              expectations needed to meet their customers needs. All
              communications are timely and very professional, further you want
              to work with this team!{" "}
            </i>
            "
          </p>
          <p className="testimonials-Box__name">~Rachana A.</p>
          <div className="testimonials-social"></div>
        </div>
        <div className="testimonials-Box">
          <img
            className="testimonials-Box__img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&usqp=CAU"
            alt="img"
          />
          <p className="testimonials-Box__text">
            "{" "}
            <i>
              I was impressed by the professionalism, attention to detail, and
              promptness of this firm. Communication is important when dealing
              with changes, as they take place on every project, and this firm
              was on point every step of the way. I will be using this firm on
              many future projects!{" "}
            </i>
            "
          </p>
          <p className="testimonials-Box__name">~Aditya</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
