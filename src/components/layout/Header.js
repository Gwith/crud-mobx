import React from "react";

import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";

const styles = () => ({
  headerContainer: {
    flex: "none"
  }
});

function Header({ classes }) {
  return (
    <AppBar position="static" className={classes.headerContainer}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
