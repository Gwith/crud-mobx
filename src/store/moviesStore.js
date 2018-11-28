import { observable, action, configure } from "mobx";
import db from "../config/fbConfig";
import { docToMovie } from "../utils/helper";

//configure({ enforceActions: "observed" });

export default class MoviesStore {
  @observable movies = null;
  @observable categories = null;
  @observable selectedMovie = null;
  @observable fetchingMoviesAndCategories = true;

  @action async getMoviesAndCategories() {
    this.fetchingMoviesAndCategories = true;

    try {
      console.log("fetching");
      this.movies = await this.getMovies();
      this.categories = await this.getCategories();
    } catch (error) {
      console.error(error);
    }
    console.log("finished");
    this.fetchingMoviesAndCategories = false;
  }
  @action.bound async deleteMovie(id) {
    await db
      .collection("movies")
      .doc(id)
      .delete();
    this.movies = await this.getMovies();
  }

  async getMovies() {
    const querySnapShot = await db.collection("movies").get();
    return querySnapShot.docs.map(doc => docToMovie(doc));
  }

  @action.bound async editMovie(id, title, category) {
    await db
      .collection("movies")
      .doc(id)
      .update({ title, category });
    this.movies = await this.getMovies();
  }

  @action.bound async getCategories() {
    const querySnapShot = await db.collection("categories").get();
    return querySnapShot.docs.map(doc => doc.data()[0]);
  }
  @action.bound async addMovie(title, category) {
    await db.collection("movies").add({ title, category });
    this.movies = await this.getMovies();
  }
  @action.bound getSelectedMovie(title) {
    this.selectedMovie = this.movies.filter(movie => title === movie.title);
  }
}
