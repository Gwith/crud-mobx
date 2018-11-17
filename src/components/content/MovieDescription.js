import React from "react";

import { Paper, Typography } from "@material-ui/core";

export default function MovieDescription() {
  return (
    <div>
      <Paper elevation={1}>
        <Typography variant="h5" component="h3">
          MovieList
        </Typography>
      </Paper>
    </div>
  );
}
