import React, { Component } from "react";

import { Paper, Typography, withStyles } from "@material-ui/core";

const style = () => ({
  customPaper: {}
});

class MovieList extends Component {
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Paper elevation={1} className={classes.customPaper}>
        <Typography variant="h5" component="h3">
          MovieList
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(style)(MovieList);