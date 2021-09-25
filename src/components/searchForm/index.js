import React, { useState } from "react";

import "./searchForm.css";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    console.log(`sumbitted value: ${value}`);
  };

  return (
    <div className="search">
      <input
        onChange={handleChange}
        value={value}
        type="text"
        className="searchTerm"
        placeholder="What do you want to watch?"
      />
      <button onClick={onSubmit} type="submit" className="searchButton">
        Search
      </button>
    </div>
  );
};

export default SearchForm;
