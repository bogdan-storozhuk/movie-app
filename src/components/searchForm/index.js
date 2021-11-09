import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import Title from "../title";

import "./searchForm.css";

const SearchForm = ({ search }) => {
  const [value, setValue] = useState("");
  const location = useLocation();

  useEffect(() => {
    setValue(search);
  }, [search]);

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
        <Link
          className="searchButton"
          to={{
            pathname: `search/${value}`,
            search: location.search,
          }}
        >
          Search
        </Link>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  search: PropTypes.string,
};

export default SearchForm;
