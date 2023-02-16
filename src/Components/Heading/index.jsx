import React from "react";

import "./style.scss";

const Heading = (props) => {
  const { title } = props;
  return (
    <div className="Heading">
      <h3 className="Heading-title">{title}</h3>
    </div>
  );
};

export default Heading;
