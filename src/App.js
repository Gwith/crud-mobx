import React from "react";
import { Header, Footer, Content } from "./components/layout";

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;
