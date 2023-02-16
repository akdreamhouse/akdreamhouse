import React from "react";
import { useNavigate } from "react-router-dom";
import BreadCrump from "../../components/BreadCrump";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { allPortfolios } from "../../constants/all-portfolios";
import "./style.scss";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="Portfolio">
      <BreadCrump
        breadCrumps={[
          {
            title: "Home",
            link: "/",
          },
          {
            title: "Portfolio",
            link: "/portfolio",
          },
        ]}
      />
      <div className="Portfolio-container">
        <div className="Portfolio-container-heading">
          <Heading title="Our Portfolios" />
        </div>

        <div className="Portfolio-container-content">
          <h3 className="Portfolio-container-content-heading">
            AK Dream House
          </h3>
          <p className="Portfolio-container-content-para-1">
            Possibilities are beyond the imagination...
            <br />
            Please view our portfolio of recent work, or contact us and discuss
            your project.
          </p>
          <p className="Portfolio-container-content-para-2">
            We have a Dynamic and Innovative Architect and Interior Designer
            Experts who strive to provide fast and reliable services at
            unbeatable prices.
          </p>
        </div>

        <div className="Portfolio-container-portfolios">
          <div className="Portfolio-container-portfolios-cards">
            {allPortfolios.map((service, index) => {
              return (
                <div
                  key={index}
                  className="Portfolio-container-portfolios-cards-card"
                >
                  <div className="Portfolio-container-portfolios-cards-card-box-content">
                    <h3 className="Portfolio-container-portfolios-cards-card-box-content-heading">
                      {service.title}
                    </h3>
                    <Button
                      onButtonClick={() =>
                        navigate(service.redirectUrl, {
                          state: {
                            PortfolioName: service.title,
                          },
                        })
                      }
                      title=""
                    />
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

export default Portfolio;
