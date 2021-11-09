import React from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

import MovieListItemMenu from "../movieListItemMenu";
import GenresDescription from "../genresDescription";

import { modifyQueryParamInSearch } from "../../utils";

import "./movieListItem.css";

const MovieListItem = ({ genres, releaseDate, title, posterPath, id }) => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handleSelectMovie = (id) => {
    const newSearch = modifyQueryParamInSearch(search, "movie", id);
    navigate({
      pathname: pathname,
      search: `?${newSearch}`,
    });
  };

  return (
    <div className="MovieListItem" onClick={() => handleSelectMovie(id)}>
      <div
        style={{
          backgroundImage: `url(${posterPath})`,
        }}
        className="MovieListItem-Container"
      >
        <MovieListItemMenu id={id} />
      </div>
      <div className="MovieListItem-Details">
        <span className="MovieListItem-Details-Title">{title}</span>
        <span className="MovieListItem-Details-Date">
          {releaseDate.slice(0, 4)}
        </span>
      </div>
      <GenresDescription genres={genres} />
    </div>
  );
};

MovieListItem.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
  ),
  releaseDate: PropTypes.string,
  title: PropTypes.string,
  posterPath: PropTypes.string,
  id: PropTypes.number,
};

export default MovieListItem;
