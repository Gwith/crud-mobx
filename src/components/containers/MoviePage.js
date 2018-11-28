import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MovieListContainer from "./MovieList/MovieListContainer";
import MovieDescriptionContainer from "./MovieDescription/MovieDescriptionContainer";
import { observer, inject } from "mobx-react";
import { Grid, withStyles, CircularProgress } from "@material-ui/core";

const styles = theme => ({
  gridContainer: {
    flex: "1 1 auto",
    margin: 0,
    width: "100%"
  },
  gridItem: {
    display: "flex",
    flexFlow: "column"
  },
  progressContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

@inject("moviesStore")
@observer
class MoviePage extends React.Component {
  componentDidMount() {
    const { moviesStore } = this.props;

    try {
      console.log("invoked");
      moviesStore.getMoviesAndCategories();
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { moviesStore, classes } = this.props;
    if (moviesStore.fetchingMoviesAndCategories === true) {
      return (
        <div className={classes.progressContainer}>
          <CircularProgress className={classes.progress} />
        </div>
      );
    }

    return (
      <React.Fragment>
        <Header handleClickTest={this.handleClickTest} />
        <Grid container spacing={16} className={classes.gridContainer}>
          <Grid item xs className={classes.gridItem}>
            <MovieListContainer />
          </Grid>
          <Grid item xs className={classes.gridItem}>
            <MovieDescriptionContainer />
          </Grid>
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MoviePage);
