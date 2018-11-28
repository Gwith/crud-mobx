import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import MovieListRender from "./MovieListRender";
import { Paper, withStyles } from "@material-ui/core";

const styles = () => ({
  customPaper: {
    flex: "1 1 auto",
    "overflow-y": "auto"
  }
});

@inject("moviesStore")
@observer
class MovieListContainer extends Component {
  state = {
    title: "",
    category: ""
  };
  handleClickSelect = title => {
    this.props.moviesStore.getSelectedMovie(title);
  };
  handleClickDelete = (e, id) => {
    e.stopPropagation();
    this.props.moviesStore.deleteMovie(id);
  };
  handleClickEdit = (e, id, title, category) => {
    e.stopPropagation();
    this.setState({
      title,
      category
    });
  };
  render() {
    const { classes, moviesStore } = this.props;
    const { title, category } = this.state;

    if (moviesStore.fetchingMoviesAndCategories) {
      return <div>Fetching Movies...</div>;
    }

    return (
      <Paper elevation={5} className={classes.customPaper}>
        <MovieListRender
          movies={moviesStore.movies}
          categories={moviesStore.categories}
          handleClickSelect={this.handleClickSelect}
          handleClickDelete={this.handleClickDelete}
          handleClickEdit={this.handleClickEdit}
          title={title}
          category={category}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(MovieListContainer);
