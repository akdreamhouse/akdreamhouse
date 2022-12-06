import React from "react";
import Feature from "../../../../Components/feature/Feature";

import "./services.scss";

const HomeServices = (props) => (
  <div className="ak__ak section__margin" id="#home">
    <div className="ak__ak-feature">
      <Feature
        title="Services we offered.."
        text="AK Architects offers a full range of Architectural & Interior Designer services. We can help you with a full service throughout the project, or a limited appointment. Please view our portfolio of recent work, or contact us on +91 8085997612 to discuss your project."
      />
    </div>
    <div className="ak__ak-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p className="gradient__text" onClick={() => props.navigate("/services")}>
        Explore the Library
      </p>
    </div>
    <div className="ak__ak-container">
      <Feature
        title="Architectural Design"
        text="This is a medium where you can experiment with simple form and volumes, add a few parameters of texture, tweak lighting effects and then balance the vibes of the space to give it a unique definition. As the best Architect services in Central India, we provide spaces a new attire for those unique architectural designs and services."
      />
      <Feature
        title="Interior Design"
        text="Interior designing is not just about good looks, it is about how the spaces extend themselves from within because of Intelligent planning. Our enterprising and talented team of AK Architects and interior designers shapes this dynamics to a new high. No wonder we are among the best interior design firm in Central India."
      />
      <Feature
        title="Landscape Design"
        text="Outdoor spaces must be just as important as interior spaces - regardless of the size of the space. The outdoors should always look great as these are the first sign of good design. As we believe that outdoor lighting is an important factor. There has to be a commonality of many design factors that balance a good landscape."
      />
      <Feature
        title="3D Elevation"
        text="Give wings to your imaginations as we design a 3D perspective view for your dream house. What's the better than a 3D view of how it would look before you invest a fortune in your house project. Our Dynamic Team give you outstanding and out of the box 3D plan of your Dream House."
      />
    </div>
  </div>
);

export default HomeServices;
