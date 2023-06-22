import React from "react";
import "./AccountSetup.css";
import { Container, Hidden, Grid } from "@mui/material";
import image from "../../assets/images/Rectangle1.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const AccountSetup = () => {
  return (
    <Container className="appworking-container" align="center">
      <p className="header1">How the app works</p>

      <Hidden mdUp>
        <hr
          style={{
            outline: "none",
            border: "none",
            minWidth: "auto",
            height: "3px",
            background: "#E4E4E4",
          }}
        />
      </Hidden>

      <Grid container spacing={21} style={styles.container}>
        {/*hide in mobile version  */}
        <Hidden mdDown>
          <Grid item md={6}>
            <img src={image} alt="App-Working" className="grid-img" />
          </Grid>
        </Hidden>

        <Grid item sm={12} md={6} style={{ textAlign: "left" }}>
          <p className="text-component1">Create an account</p>
          <p className="text-component2">
            Create/login to an existing account to get started
          </p>
          <p className="text-component3">
            An account is created with your email and a desired password
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountSetup;
