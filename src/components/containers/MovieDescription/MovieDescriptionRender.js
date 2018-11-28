import React from "react";
import { Typography, withStyles } from "@material-ui/core";

const styles = () => ({
  descriptionLayout: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 1 auto"
  }
});

function MovieDescriptionRender({ selectedMovie, classes }) {
  return (
    <div className={classes.descriptionLayout}>
      <Typography variant="h1">{selectedMovie.title}</Typography>
      {/* <Typography variant="h6">{selectedMovie.description}</Typography> */}
    </div>
  );
}

export default withStyles(styles)(MovieDescriptionRender);
