import React, { useState, useEffect } from "react";

import MovieList from "../movieList";
import ControlPanel from "../controlPanel";
import MovieCount from "../movieCount";
import ErrorBoundry from "../errorBoundry";

import { getMovies } from "../../services/movieService";
import WithLoading from "../../hoc/withLoading";

import "./mainContent.css";

const MovieListWithLoading = WithLoading(MovieList);

const MainContent = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="MainContent">
      <ControlPanel />
      <MovieCount count={movies.length} />
      <ErrorBoundry>
        <MovieListWithLoading isLoading={isLoading} movies={movies} />
      </ErrorBoundry>
    </div>
  );
};

export default MainContent;
