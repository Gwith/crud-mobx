import { observable, action, configure } from "mobx";
import db from "../config/fbConfig";

// configure({ enforceActions: "observed" });

function docToMovie(doc) {
  return {
    ...doc.data(),
    id: doc.id
  };
}

export default class MoviesStore {
  @observable movies = null;
  @observable categories = null;
  @observable selectedMovie = null;
  @observable fetchingMoviesAndCategories = true;

  @action
  changeFetchingMoviesAndCategories = bool => {
    this.fetchingMoviesAndCategories = bool;
  };

  @action.bound async getMoviesAndCategories() {
    this.changeFetchingMoviesAndCategories(true);

    try {
      const [movies, categories] = await Promise.all([
        this.getMovies(),
        this.getCategories()
      ]);
      this.movies = movies;
      this.categories = categories;
    } catch (error) {
      console.error(error);
    } finally {
      this.changeFetchingMoviesAndCategories(false);
    }
  }
  @action.bound deleteMovie = async id => {
    await db
      .collection("movies")
      .doc(id)
      .delete();
    this.movies = await this.getMovies();
  };
  @action.bound getMovies = async () => {
    const querySnapShot = await db.collection("movies").get();
    return querySnapShot.docs.map(doc => docToMovie(doc));
  };
  @action.bound editMovie = async (id, title, category) => {
    await db
      .collection("movies")
      .doc(id)
      .update({ title, category });
    this.movies = await this.getMovies();
  };
  @action.bound getCategories = async () => {
    const querySnapShot = await db.collection("categories").get();
    return querySnapShot.docs.map(doc => doc.data()[0]);
  };
  @action.bound addMovie = async (title, category) => {
    await db.collection("movies").add({ title, category });
    this.movies = await this.getMovies();
  };
  @action.bound getSelectedMovie(title) {
    this.selectedMovie = this.movies.filter(movie => title === movie.title);
  }
}
