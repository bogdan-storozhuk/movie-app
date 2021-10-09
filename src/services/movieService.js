import movieData from "../assets/data/movies.json";
import { mapMovieJson, formatMoviesArray } from "../utils";

const getMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movies = movieData.slice(0, 20);
      const mappedMovies = mapMovieJson(movies);
      resolve(formatMoviesArray(mappedMovies));
    }, 700);
  });
};

export { getMovies };
