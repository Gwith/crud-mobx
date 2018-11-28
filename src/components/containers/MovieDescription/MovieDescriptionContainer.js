import React from "react";
import { observer, inject } from "mobx-react";
import { Paper, withStyles } from "@material-ui/core";
import MovieDescriptionRender from "./MovieDescriptionRender";

const styles = () => ({
  customPaper: {
    display: "flex",
    flex: "1 1 auto"
  }
});

@inject("moviesStore")
@observer
class MovieDescriptionContainer extends React.Component {
  render() {
    const { classes, moviesStore } = this.props;
    if (moviesStore.selectedMovie === null) {
      return <Paper elevation={5} />;
    }

    return (
      <Paper elevation={5} className={classes.customPaper}>
        <MovieDescriptionRender selectedMovie={moviesStore.selectedMovie[0]} />
      </Paper>
    );
  }
}

export default withStyles(styles)(MovieDescriptionContainer);
