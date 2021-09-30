import React from "react";

import Logo from "../logo";
import AddMovieButton from "../addMovieButton";
import Title from "../title";
import SearchForm from "../searchForm";

import "./header.css";

const Header = () => (
  <>
    <div className="Background"></div>
    <div className="Header">
      <div className="Header-TopPanel">
        <Logo />
        <AddMovieButton />
      </div>
      <div className="Header-BottomPanel">
        <Title />
        <SearchForm />
      </div>
    </div>
  </>
);

export default Header;
