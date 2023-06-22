import React from "react";
import "./FoodAppBanner.css";
import image from "../../assets/images/Group 53_1.png";
import { Container, Hidden } from "@mui/material";

const FoodAppBanner = () => {
  return (
    <>
      <div className="container">
        <Container maxWidth="md">
          <div className="text-content">
            <div className="textcomponent1">Food app</div>

            <div className="textcomponent2">
              Why stay hungry when you can order form Bella Onojie
            </div>

            <div className="textcomponent3">
              Download the bella onoje’s food app now on
            </div>
          </div>

          <div className="btn-container">
            <a href="#" className="btn-playstore">Playstore</a>
            <a href="#" className="btn-appstore">App store</a>
          </div>
        </Container>
      </div>

      {/* ImageOverlay */}
      <div className="img-container">
        <img src={image} alt="mobile-app" className="img-overlay" />
      </div>

      {/* hr line */}
      <Hidden mdDown>
        <hr
          style={{
            outline: "none",
            border: "none",
            minWidth: "auto",
            maxWidth: "884px",
            height: "3px",
            background: "#E4E4E4",
          }}
        />
      </Hidden>
    </>
  );
};

export default FoodAppBanner;
