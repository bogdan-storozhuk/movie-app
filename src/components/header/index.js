import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import Logo from "../logo";
import AddMovieButton from "../addMovieButton";
import SearchForm from "../searchForm";
import MovieDetails from "../movieDetails";
import BackButton from "../backButton";

import { selectMovie } from "../../reducers/movies/actions";
import { openAddMovieModal } from "../../reducers/modals/actions";
import {
  selectedMovieSelector,
  searchSelector,
} from "../../reducers/movies/selectors";

import "./header.css";

const Header = ({ resetMovie, openAddMovieModal, selectedMovie, search }) => (
  <>
    <div className="Background"></div>
    <div className="Header">
      <div className="Header-Panel">
        <Logo />
        {selectedMovie ? (
          <BackButton resetMovie={resetMovie} />
        ) : (
          <AddMovieButton openAddMovieModal={openAddMovieModal} />
        )}
      </div>
      {selectedMovie ? (
        <MovieDetails selectedMovie={selectedMovie} />
      ) : (
        <SearchForm search={search} />
      )}
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  selectedMovie: selectedMovieSelector,
  search: searchSelector,
});

function mapDispatchToProps(dispatch) {
  return {
    resetMovie: () => dispatch(selectMovie(null)),
    openAddMovieModal: () => dispatch(openAddMovieModal()),
  };
}

Header.propTypes = {
  resetMovie: PropTypes.func,
  openAddMovieModal: PropTypes.func,
  selectedMovie: PropTypes.shape({
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
    ),
    id: PropTypes.number,
    overview: PropTypes.string,
    posterPath: PropTypes.string,
    releaseDate: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    title: PropTypes.string,
    voteAverage: PropTypes.number,
    voteCount: PropTypes.number,
  }),
  search: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
