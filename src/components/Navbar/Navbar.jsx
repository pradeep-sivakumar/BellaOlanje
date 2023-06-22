import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Hidden,
} from "@mui/material";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "#ffff" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography component="div">
          <img src={logo} alt="logo" className="logo" />
        </Typography>

        <Hidden mdDown>
          {/* Menu items for desktop view */}
          <div className="nav-flex">
            <Typography
              variant="subtitle"
              sx={{
                color: "#FA4A0C",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Home
            </Typography>
            <Typography
              variant="subtitle"
              sx={{
                color: "#252B42",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Product
            </Typography>
            <Typography
              variant="subtitle"
              sx={{
                color: "#252B42",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Faq
            </Typography>
            <Typography
              variant="subtitle"
              sx={{
                color: "#252B42",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              Contact
            </Typography>
          </div>
        </Hidden>

        <Hidden mdUp>
          {/* Menu button for mobile view */}
          <IconButton size="large" color="gray" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>Product</MenuItem>
          <MenuItem onClick={handleMenuClose}>Faq</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
