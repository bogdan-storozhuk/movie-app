import React, { useState } from "react";
import PropTypes from "prop-types";

import Title from "../title";

import "./searchForm.css";

const SearchForm = ({ handleSubmitSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="Header-BottomPanel">
      <Title>FIND YOUR MOVIE</Title>
      <div className="search">
        <input
          onChange={handleChange}
          value={value}
          type="text"
          className="searchTerm"
          placeholder="What do you want to watch?"
        />
        <button
          onClick={() => handleSubmitSearch(value)}
          type="submit"
          className="searchButton"
        >
          Search
        </button>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  handleSubmitSearch: PropTypes.func,
};

export default SearchForm;
