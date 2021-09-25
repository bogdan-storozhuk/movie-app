import React from "react";

import helloWorld from "./helloWorld";
import Counter from "./counter";
import SearchForm from "./searchForm";
import GenreToggle from "./genreToggle";

import catPicture from '../img/cat.jpg';

function App() {
  const genreList = [
    { id: 0, name: "ALL" },
    { id: 1, name: "DOCUMENTARY" },
    { id: 2, name: "COMEDY" },
    { id: 3, name: "HORROR" },
    { id: 4, name: "CRIME" },
  ];

  return (
    <div className="App">
      {helloWorld}
      <Counter />
      <SearchForm />
      <GenreToggle genreList={genreList} />
      <img src={catPicture} alt="cat" />
    </div>
  );
}

export default App;
