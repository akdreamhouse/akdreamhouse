import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const BreadCrump = (props) => {
  const { breadCrumps } = props;
  return (
    <nav aria-label="breadcrumb">
      <div className="breadcrumb-container">
        <ol className="breadcrumb">
          {breadCrumps.map((item, index) => {
            return (
              <li key={index} className="breadcrumb-item">
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default BreadCrump;
