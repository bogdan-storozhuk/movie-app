import React from "react";
import PropTypes from "prop-types";

import Logo from "../logo";
import AddMovieButton from "../addMovieButton";
import Title from "../title";
import SearchForm from "../searchForm";

import "./header.css";

const Header = ({ handleAddNewMovie }) => (
  <>
    <div className="Background"></div>
    <div className="Header">
      <div className="Header-TopPanel">
        <Logo />
        <AddMovieButton handleAddNewMovie={handleAddNewMovie} />
      </div>
      <div className="Header-BottomPanel">
        <Title>FIND YOUR MOVIE</Title>
        <SearchForm />
      </div>
    </div>
  </>
);

Header.propTypes = {
  handleAddNewMovie: PropTypes.func,
};

export default Header;
