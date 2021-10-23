import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import Logo from "../logo";
import AddMovieButton from "../addMovieButton";
import SearchForm from "../searchForm";
import MovieDetails from "../movieDetails";
import BackButton from "../backButton";

import { selectMovie, submitSearch } from "../../reducers/movies/actions";
import { openAddMovieModal } from "../../reducers/modals/actions";
import { selectedMovieSelector } from "../../reducers/movies/selectors";

import "./header.css";

const Header = ({
  submitSearch,
  resetMovie,
  openAddMovieModal,
  selectedMovie,
}) => (
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
        <SearchForm submitSearch={submitSearch} />
      )}
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  selectedMovie: selectedMovieSelector,
});

function mapDispatchToProps(dispatch) {
  return {
    resetMovie: () => dispatch(selectMovie(null)),
    submitSearch: (search) => dispatch(submitSearch(search)),
    openAddMovieModal: () => dispatch(openAddMovieModal()),
  };
}

Header.propTypes = {
  submitSearch: PropTypes.func,
  resetMovie: PropTypes.func,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
