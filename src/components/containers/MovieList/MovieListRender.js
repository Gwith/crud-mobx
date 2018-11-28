import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import MovieForm from "../../utils/MovieForm";
import {
  IconButton,
  ListItemText,
  ListItem,
  List,
  Typography
} from "@material-ui/core";

function MovieList({
  movies,
  categories,
  handleClickSelect,
  handleClickDelete,
  handleClickEdit
}) {
  console.log({ movies, categories });
  return (
    <React.Fragment>
      {categories.map(category => (
        <React.Fragment key={category}>
          <Typography variant="h4" key={category}>
            {category}
          </Typography>
          <List>
            {movies
              .filter(movie => category === movie.category)
              .map(movie => (
                <ListItem
                  key={movie.id}
                  button
                  onClick={() => handleClickSelect(movie.title)}
                >
                  <ListItemText>{movie.title}</ListItemText>
                  <MovieForm
                    handleClickEdit={handleClickEdit}
                    editMode={true}
                    id={movie.id}
                    title={movie.title}
                    category={movie.category}
                  />
                  <IconButton>
                    <DeleteIcon onClick={e => handleClickDelete(e, movie.id)} />
                  </IconButton>
                </ListItem>
              ))}
          </List>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default MovieList;
