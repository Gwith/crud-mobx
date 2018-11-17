import React from "react";

import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";

const styles = () => ({
  footerContainer: {
    flex: "none"
  }
});

function Footer({ classes }) {
  return (
    <AppBar position="static" className={classes.footerContainer}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Footer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Footer);
