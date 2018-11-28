import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Add } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import {
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  DialogTitle,
  withStyles,
  MenuItem
} from "@material-ui/core";

const styles = () => ({
  textField: {},
  menu: {}
});

@inject("moviesStore")
@observer
class AddMovie extends Component {
  state = {
    open: false,
    movie: {
      id: null,
      title: "",
      category: ""
    }
  };
  componentDidMount() {
    const { id, title, category } = this.props;
    this.setState({
      movie: {
        id,
        title,
        category
      }
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleSubmit = editMode => {
    const { moviesStore } = this.props;
    const { id, title, category } = this.state.movie;
    if (title && category && editMode) {
      this.handleClose();
      moviesStore.editMovie(id, title, category);
    }
    if (title && category && !editMode) {
      this.handleClose();
      moviesStore.addMovie(title, category);
      this.setState({
        movie: {
          id: "",
          title: "",
          category: ""
        }
      });
    }
  };
  onChangeMovie = e => {
    const [field, value] = [e.target.name, e.target.value];
    this.setState({
      movie: {
        ...this.state.movie,
        [field]: value
      }
    });
  };

  render() {
    const { editMode, classes, moviesStore } = this.props;
    const { movie, open } = this.state;

    return (
      <>
        <Button
          onClick={this.handleClickOpen}
          variant="fab"
          mini
          color="secondary"
        >
          {editMode ? <EditIcon /> : <Add />}
        </Button>

        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {editMode ? "Edit" : "Add"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please {editMode ? "Edit" : "Add"} Movie
            </DialogContentText>
            <TextField
              required
              id="standard-required"
              label="Movie Name"
              margin="normal"
              name="title"
              value={movie.title}
              onChange={this.onChangeMovie}
              fullWidth
            />
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              className={classes.textField}
              value={movie.category}
              name="category"
              onChange={this.onChangeMovie}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select a category"
              margin="normal"
            >
              {moviesStore.categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.handleSubmit(editMode)}
              color="primary"
              autoFocus
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default withStyles(styles)(AddMovie);
