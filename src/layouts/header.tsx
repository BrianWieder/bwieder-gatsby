import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Header: () => JSX.Element = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">Brian Wieder</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
