import React from "react";
import memories from "./images/memories.png";
import { Typography, AppBar } from "@mui/material";
import useStyles from "./styles";

function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
          <img
            className={classes.image}
            src={memories}
            alt="icon"
            height="60"
          />
        </Typography>
      </AppBar>
    </>
  );
}

export default Navbar;
