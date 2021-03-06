import qs from "query-string";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const getFormatedGenresDescription = (genres) => {
  if (genres.length === 2) {
    return `${genres[0].name} & ${genres[1].name}`;
  } else if (genres.length >= 3) {
    return genres.reduceRight((accumulator, currentValue, index) => {
      let newValue = accumulator + currentValue.name;
      if (index === 0) {
        return newValue;
      }
      return `${newValue}, `;
    }, "");
  } else {
    return genres[0].name;
  }
};

const getGenreList = (withAll) => {
  const genreList = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Romance" },
    { id: 3, name: "Comedy" },
    { id: 4, name: "Family" },
    { id: 5, name: "Adventure" },
    { id: 6, name: "Animation" },
    { id: 7, name: "Science Fiction" },
    { id: 8, name: "Fantasy" },
    { id: 9, name: "Action" },
    { id: 10, name: "Thriller" },
    { id: 11, name: "Mystery" },
  ];
  return withAll ? [{ id: 0, name: "All" }, ...genreList] : genreList;
};

const mapMovieJson = (movieData) => {
  return movieData.map((movie) => {
    const { vote_average, vote_count, release_date, poster_path, ...rest } =
      movie;
    return {
      ...rest,
      voteAverage: vote_average,
      voteCount: vote_count,
      releaseDate: release_date,
      posterPath: poster_path,
    };
  });
};

const mapMovieFieldNameToBackEndFormat = (value) => {
  switch (value) {
    case "voteAverage":
      return "vote_average";
    case "voteCount":
      return "vote_count";
    case "releaseDate":
      return "release_date";
    case "posterPath":
      return "poster_path";
    default:
      return value;
  }
};

const mapMovieFieldValueToBackEndFormat = (key, value) => {
  switch (key) {
    case "voteAverage":
    case "runtime":
      return Number.parseInt(value);
    case "genres":
      const updatedGenres = value.map(({ name }) => name);
      return updatedGenres;
    case "tagline":
      return value ? value : "default tagline";
    default:
      return value;
  }
};

const mapMovieJsonToBackEndFormat = (movie) => {
  const reformatedMovie = {};
  for (const key in movie) {
    reformatedMovie[mapMovieFieldNameToBackEndFormat(key)] =
      mapMovieFieldValueToBackEndFormat(key, movie[key]);
  }
  return reformatedMovie;
};

const formatMoviesArray = (movies) => {
  return movies.map((movie) => {
    const { genres, ...rest } = movie;
    const updatedGenres = genres.map((genre) => ({ name: genre }));
    return { ...rest, genres: updatedGenres };
  });
};

const modifyQueryParamInSearch = (search, name, value) => {
  const queryParams = qs.parse(search);
  const newQueryParams = {
    ...queryParams,
    [name]: value,
  };
  return qs.stringify(newQueryParams);
};

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

export {
  getFormatedGenresDescription,
  getGenreList,
  mapMovieJson,
  formatMoviesArray,
  mapMovieFieldNameToBackEndFormat,
  mapMovieJsonToBackEndFormat,
  modifyQueryParamInSearch,
  renderWithRouter,
};
