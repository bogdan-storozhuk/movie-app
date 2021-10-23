import {
  mapMovieJson,
  formatMoviesArray,
  mapMovieJsonToBackEndFormat,
} from "../utils";

const apiBase = "http://localhost:4000";

const getMoviesAsync = async (genre, search, sortBy) => {
  let url = `${apiBase}/movies/?limit=${30}`;
  if (genre && genre !== "All") {
    url += `&filter=${genre}`;
  }
  if (search) {
    url += `&searchBy=title&search=${search}`;
  }
  if (sortBy) {
    url += `&sortBy=${mapMovieJsonToBackEndFormat(sortBy)}&sortOrder=desc`;
  }
  const res = await fetch(url);
  const { data } = await res.json();
  const mappedMovies = mapMovieJson(data);
  return formatMoviesArray(mappedMovies);
};

export { getMoviesAsync };
