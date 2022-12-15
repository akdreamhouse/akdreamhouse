import React from "react";
import Feature from "../../../../Components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Floor Planning",
    text: "A floor plan is a drawing or a visual representation of a home interior from above. It shows the placement of walls and includes key elements of the house like doors, windows, stairs, and main furniture. It also communicates the room names and sizes, as well as the dimensions between walls.",
  },
  {
    title: "Landscaping",
    text: "Landscape architecture, the development and decorative planting of gardens, yards, grounds, parks, and other planned green outdoor spaces. Landscape gardening is used to enhance nature and to create a natural setting for buildings, towns, and cities. It is one of the decorative arts and is allied to architecture, city planning, and horticulture.",
  },
  {
    title: "Structure Drawing",
    text: "A structural drawing, a type of engineering drawing, is a plan or set of plans and details for how a building or other structure will be built. Soil Analysis, Column Center Line Layout, Foundation Plan and Schedule, plinth level structure, Roof Beam.",
  },
  {
    title: "Plumbing & Deainage Details",
    text: "Location of Septic Tanks & details, Plumbing Fixtures, Pipeline Circulation, Drainage Pipe Circulation, Drain water management, Tank water supply.",
  },
  {
    title: "Electric Layout",
    text: "Complete Electric Layout plan and Furniture Replacement, AMP switch and Socket location with Hieght Details, Fan, AC, Geyser and Lights location.",
  },
  {
    title: "Interior Design",
    text: "Material Detailing, Furniture Replacement, Slone Cladding, Wallerpaper, Tiles, Textures, CNC Cutting, Acrylic Sheet.",
  },
];

const Features = () => (
  <div className="ak__features section__padding" id="features">
    <div className="ak__features-heading">
      <h1 className="gradient__text">
        We have a Dynamic and Innovative Architect and Interior Designer Experts
        who strive to provide fast and reliable services at unbeatable prices.
      </h1>
    </div>
    <div className="ak__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
