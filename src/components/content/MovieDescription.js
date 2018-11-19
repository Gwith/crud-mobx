import React from "react";

import { Paper, Typography, withStyles } from "@material-ui/core";

const styles = () => ({
  customPaper: {
    flex: "1 1 auto"
  }
});

function MovieDescription({ classes }) {
  return (
    <Paper elevation={5} className={classes.customPaper}>
      <Typography variant="h5" component="h3">
        MovieList
      </Typography>
    </Paper>
  );
}

export default withStyles(styles)(MovieDescription);
