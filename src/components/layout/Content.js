import React from "react";
import { MovieList, MovieDescription } from "../content";

import { Grid, withStyles } from "@material-ui/core";

const styles = () => ({
  gridContainer: {},
  gridItem: {}
});

function Content({ classes }) {
  return (
    <Grid container spacing={16} className={classes.gridContainer}>
      <Grid item xs>
        <MovieList className={classes.gridItem} />
      </Grid>
      <Grid item xs>
        <MovieDescription className={classes.gridItem} />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Content);
