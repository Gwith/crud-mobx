import React from "react";
import MoviePage from "./components/containers/MoviePage";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import theme from "./theme";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MoviePage />
    </MuiThemeProvider>
  );
};

export default App;
