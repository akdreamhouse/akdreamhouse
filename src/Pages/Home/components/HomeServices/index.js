import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import Heading from "../../../../components/Heading";

import setviceImg from "./../../../../assets/images/home-carousel/2.jpg";

import "./style.scss";

const HomeServices = () => {
  const navigate = useNavigate();
  return (
    <div className="HomeServices">
      <div className="HomeServices-container">
        <div className="HomeServices-container-heading">
          <Heading title="Services..." />
          <p>
            We have a Dynamic and Innovative Architect and Interior Designer
            Experts who strive to provide fast and reliable services at
            unbeatable prices.
          </p>
        </div>
        <div className="HomeServices-container-services">
          <div className="HomeServices-container-services-left">
            <div className="HomeServices-container-service">
              <h3>Floor Planning</h3>
              <p>
                A floor plan is a drawing or a visual representation of a home
                interior from above. It shows the placement of walls and
                includes key elements of the house like doors, windows, stairs,
                and main furniture. It also communicates the room names and
                sizes, as well as the dimensions between walls.
              </p>
            </div>
            <div className="HomeServices-container-service">
              <h3>Landscaping</h3>
              <p>
                Landscape architecture, the development and decorative planting
                of gardens, yards, grounds, parks, and other planned green
                outdoor spaces. Landscape gardening is used to enhance nature
                and to create a natural setting for buildings, towns, and
                cities. It is one of the decorative arts and is allied to
                architecture, city planning, and horticulture.
              </p>
            </div>
            <div className="HomeServices-container-service">
              <h3>Structure Drawing</h3>
              <p>
                A structural drawing, a type of engineering drawing, is a plan
                or set of plans and details for how a building or other
                structure will be built. Soil Analysis, Column Center Line
                Layout, Foundation Plan and Schedule, plinth level structure,
                Roof Beam.
              </p>
            </div>
            <div className="HomeServices-container-service">
              <h3>Plumbing & Deainage Details</h3>
              <p>
                Location of Septic Tanks & details, Plumbing Fixtures, Pipeline
                Circulation, Drainage Pipe Circulation, Drain water management,
                Tank water supply.
              </p>
            </div>
            <div className="HomeServices-container-service">
              <h3>Electric Layout</h3>
              <p>
                Complete Electric Layout plan and Furniture Replacement, AMP
                switch and Socket location with Hieght Details, Fan, AC, Geyser
                and Lights location.
              </p>
            </div>
            <div className="HomeServices-container-service">
              <h3>Interior Design</h3>
              <p>
                Material Detailing, Furniture Replacement, Slone Cladding,
                Wallerpaper, Tiles, Textures, CNC Cutting, Acrylic Sheet.
              </p>
            </div>
            <div className="HomeServices-container-service">
              <h3>Architectural Design</h3>
              <p>
                This is a medium where you can experiment with simple form and
                volumes, add a few parameters of texture, tweak lighting effects
                and then balance the vibes of the space to give it a unique
                definition. As the best Architect services in Central India, we
                provide spaces a new attire for those unique architectural
                designs and services.
              </p>
            </div>
            <div className="HomeServices-container-service">
              <h3>3D Elevation</h3>
              <p>
                Give wings to your imaginations as we design a 3D perspective
                view for your dream house. What's the better than a 3D view of
                how it would look before you invest a fortune in your house
                project. Our Dynamic Team give you outstanding and out of the
                box 3D plan of your Dream House.
              </p>
            </div>
          </div>
          <div className="HomeServices-container-services-right">
            <div className="HomeServices-container-services-right-Box">
              <img src={setviceImg} alt="ss" />
              <p className="HomeServices-container-services-right-Box-firstP">
                The possibilities are beyond your imagination.
              </p>
              <h4>AK Dream House Ensure...</h4>
              <h3>
                Make Your House Exterior Stand Out from the Rest with Our
                Outstanding 3D Elevation Designs!
              </h3>

              <p className="HomeServices-container-services-right-Box-secP">
                AK Architects is developing online services provide all types of
                3D Design, 3D Elevation, 3D Exterior Elevation & distinct kinds
                of home designs in over India. We provide all kinds of 3D Front
                Elevation Designs everywhere in India just order and get your 3D
                Front Elevation Design and construct your home with an
                exceptional Elevation Front Design.
              </p>

              <p className="HomeServices-container-services-right-Box-thirdP">
                AK Architects offers a full range of Architectural & Interior
                Designer services. We can help you with a full service
                throughout the project, or a limited appointment. Please view
                our portfolio of recent work, or contact us on +91 8085997612 to
                discuss your project.
              </p>

              <p className="HomeServices-container-services-right-Box-reqP">
                Request Early Access to Get Started.
              </p>

              <Button
                title="See all services"
                onButtonClick={() => navigate("/services")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
