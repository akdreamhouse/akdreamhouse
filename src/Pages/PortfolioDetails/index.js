import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrump from "../../components/BreadCrump";
import Heading from "../../components/Heading";
import Offers from "../../components/Offer";
import "./style.scss";

const PortfolioDetails = (props) => {
  const location = useLocation();
  return (
    <div className="PortfolioDetails">
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
      <div className="PortfolioDetails-container">
        <div className="PortfolioDetails-container-header">
          <Heading title="Portfolio Details" />
          <p>
            <b>PROJECT DESCRIPTION</b> – An NRI colony was proposed along the
            main roads of Bicholi, Mardana. Three types of bungalows were
            proposed . 2 BHK ; 3 BHK ; and a villa having the areas 2000 sq.ft ;
            3000 sq.ft ; 5000 sq.ft respectively. All, the houses were proposed
            to be a luxurious retreat to the owner who has now adapted to a
            different culture and lifestyle . Masterful design and modern
            opulence were carefully and splendidly merged to achieve a space
            that is luxurious , rich yet have a homespun feeling, packed with
            all the required facilities Perfect for anyone , the houses were
            ideally designed and positioned in a true resort style .
          </p>
          <p>
            <b>PROJECT NAME</b> – {location?.state?.PortfolioName}
          </p>
          <p>
            <b>PROJECT CATEGORY</b> – Industrial
          </p>
          <p>
            <b>LOCATION</b> – Indore MP India
          </p>
          <p>
            <b>AREA</b> – 5000 sq.ft
          </p>
          <p>
            <b>CLIENT </b> – Aditya
          </p>
        </div>
        <div className="PortfolioDetails-container-images">
          <div className="PortfolioDetails-container-images-box">
            <img
              src="https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519"
              alt="imgg"
            />
            <img
              src="https://media.designcafe.com/wp-content/uploads/2020/03/21013530/interior-design-trends-hyderabad-2020.jpg"
              alt="imgg"
            />
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/nine-small-house-interior-design-hacks/two-seater-couches-and-wall-mounts-design-hack.jpg"
              alt="imgg"
            />
            <img
              src="https://i.insider.com/5de80b8579d7572a2f58c794?width=1000&format=jpeg&auto=webp"
              alt="imgg"
            />
          </div>
        </div>
      </div>
      <Offers />
    </div>
  );
};

export default PortfolioDetails;
