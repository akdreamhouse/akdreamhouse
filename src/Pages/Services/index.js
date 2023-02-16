import React from "react";
import BreadCrump from "../../components/BreadCrump";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { allServices } from "../../constants/all-services";
import "./style.scss";

const Services = () => {
  return (
    <div className="Services">
      <BreadCrump
        breadCrumps={[
          {
            title: "Home",
            link: "/",
          },
          {
            title: "Services",
            link: "/services",
          },
        ]}
      />
      <div className="Services-container">
        <div className="Services-container-heading">
          <Heading title="Our Services" />
        </div>
        <div className="Services-container-content">
          <h3 className="Services-container-content-heading">AK Dream House</h3>
          <p className="Services-container-content-para-1">
            Possibilities are beyond the imagination...
            <br />
            Please view our portfolio of recent work, or contact us and discuss
            your project.
          </p>
          <p className="Services-container-content-para-2">
            We have a Dynamic and Innovative Architect and Interior Designer
            Experts who strive to provide fast and reliable services at
            unbeatable prices.
          </p>
        </div>

        <div className="Services-container-services">
          <div className="Services-container-services-cards">
            {allServices.map((service, index) => {
              return (
                <div
                  key={index}
                  className="Services-container-services-cards-card"
                >
                  <div className="Services-container-services-cards-card-box-content">
                    <h3 className="Services-container-services-cards-card-box-content-heading">
                      {service.title}
                    </h3>
                    <Button onClick={() => {}} title="" />
                  </div>
                  <img alt="img-title" src={service.imgUrl} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
