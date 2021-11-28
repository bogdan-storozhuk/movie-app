import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

import MovieListItemMenu from "../movieListItemMenu";
import GenresDescription from "../genresDescription";

import { modifyQueryParamInSearch } from "../../utils";

import {
  openDeleteMovieModal,
  openEditMovieModal,
} from "../../reducers/modals/actions";

import "./movieListItem.css";

export const MovieListItem = ({
  openDeleteMovieModal,
  openEditMovieModal,
  genres,
  releaseDate,
  title,
  posterPath,
  id,
}) => {
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
        <MovieListItemMenu
          openDeleteMovieModal={openDeleteMovieModal}
          openEditMovieModal={openEditMovieModal}
          id={id}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    openDeleteMovieModal: (id) => dispatch(openDeleteMovieModal(id)),
    openEditMovieModal: (id) => dispatch(openEditMovieModal(id)),
  };
};

MovieListItem.propTypes = {
  openDeleteMovieModal: PropTypes.func,
  openEditMovieModal: PropTypes.func,
  genres: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
  ),
  releaseDate: PropTypes.string,
  title: PropTypes.string,
  posterPath: PropTypes.string,
  id: PropTypes.number,
};

export default connect(null, mapDispatchToProps)(MovieListItem);
