import React from "react";
import { MovieList, MovieDescription } from "../content";

import { Grid, withStyles } from "@material-ui/core";

const styles = () => ({
  gridContainer: {
    flex: "1 1 auto",
    margin: 0,
    width: "100%"
  },
  gridItem: {
    display: "flex",
    flexFlow: "column"
  }
});

function Content({ classes }) {
  return (
    <Grid container spacing={16} className={classes.gridContainer}>
      <Grid item xs className={classes.gridItem}>
        <MovieList />
      </Grid>
      <Grid item xs className={classes.gridItem}>
        <MovieDescription />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Content);
