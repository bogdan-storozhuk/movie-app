import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { modifyQueryParamInSearch } from "../../utils";

import "./genreItem.css";

const GenreItem = ({ genre, highlightGenreIfSelected }) => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const setGenre = (name) => {
    const newSearch = modifyQueryParamInSearch(search, "genre", name);
    navigate({
      pathname: pathname,
      search: `?${newSearch}`,
    });
  };
  return (
    <li onClick={() => setGenre(genre.name)} className="genreItem">
      <span
        className={`genreItemMessage ${highlightGenreIfSelected(genre.name)}`}
      >
        {genre.name}
      </span>
    </li>
  );
};

GenreItem.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  highlightGenreIfSelected: PropTypes.func,
};

export default GenreItem;
