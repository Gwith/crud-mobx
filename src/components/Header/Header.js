import React from "react";
import MovieForm from "../utils/MovieForm";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";

const styles = () => ({
  headerContainer: {
    display: "flex",
    flex: "0 0 auto"
  },
  headerColumn1: {
    flex: "1 1 auto"
  },
  headerColumn2: {
    flex: "1 1 auto",
    textAlign: "center"
  },
  headerColumn3: {
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "flex-end"
  }
});

function Header({ classes, handleClickTest }) {
  return (
    <React.Fragment>
      <AppBar position="static" className={classes.headerContainer}>
        <Toolbar>
          <div className={classes.headerColumn1} />
          <div className={classes.headerColumn2}>
            <Typography variant="h4" color="inherit">
              Movies Database
            </Typography>
          </div>
          <div className={classes.headerColumn3}>
            <MovieForm editMode={false} />
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);
