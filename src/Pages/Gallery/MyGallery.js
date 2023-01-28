import React from "react";
import { elevationImages } from "../../utils/constants/elevationImages";
import "./MyGallery.scss";

function MyGallery() {
  return (
    <div className="my-gallery pt-5">
      <div className="my-gallery-container py-5">
        {elevationImages.map((item, index) => {
          return (
            <div key={index} className="my-gallery-container-img-box">
              <img
                className="lg-3"
                src={item.imageUrl}
                alt={item.imageType}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyGallery;
