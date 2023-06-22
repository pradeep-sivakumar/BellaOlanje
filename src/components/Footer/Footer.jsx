import React from "react";
import { Box, Typography, IconButton, Hidden } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "60px",
          flexWrap: "wrap",
        }}
      >
        <Hidden mdDown>
          <div>
            <Typography variant="h6" component="div">
              <img src={logo} alt="logo" style={{ height: "78px" }} />
            </Typography>
          </div>
        </Hidden>

        {/* Social media icons */}
        <div>
          <IconButton sx={{ color: "#FA4A0C" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "#FA4A0C" }}>
            <FacebookIcon />
          </IconButton>

          <Hidden mdDown>
            <IconButton sx={{ color: "#FA4A0C" }}>
              <InstagramIcon />
            </IconButton>
          </Hidden>

          <Hidden mdUp>
            <IconButton sx={{ color: "#FA4A0C" }}>
              <LinkedInIcon />
            </IconButton>
          </Hidden>
        </div>

        {/* Copyright */}
        <Hidden mdDown>
          <div>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Roboto" }}
              component="div"
              align="center"
            >
              Copywright 2020 Bella Onojie.com
            </Typography>
          </div>
        </Hidden>
      </Box>

      <Hidden mdUp>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Roboto" }}
          style={{ paddingBottom: "45px" }}
          align="center"
        >
          Just type what's on your mind and we'll
        </Typography>
      </Hidden>
    </>
  );
};

export default Footer;
