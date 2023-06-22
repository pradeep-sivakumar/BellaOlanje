import React from "react";
import { Container, Hidden } from "@mui/material";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="appdownload-container">
      <Container maxWidth="md">
        <div className="download-text-container">
          <div className="download-text1">
            Download the app now.
            <Hidden mdDown>
              <div className="download-text2">
                Available on your favorite store. Start your premium experience
                now
              </div>
            </Hidden>
            <Hidden mdUp>
              <div className="download-text2">
                Most calendars are designed for teams.
              </div>
            </Hidden>
          </div>
        </div>

        <Hidden mdDown>
          <div className="download-btn-container">
            <a href="#" className="download-btn1">Playstore</a>
            <a href="#" className="download-btn2">App store</a>
          </div>
        </Hidden>

        <Hidden mdUp>
          <div className="download-btn-container">
            <a href="#" className="download-btn1">Buy now</a>
            <a href="#" className="download-btn2">Try for free</a>
          </div>
        </Hidden>
      </Container>
    </div>
  );
};

export default AppDownload;
