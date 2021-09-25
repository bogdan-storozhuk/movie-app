import React from "react";

import "./genreToggle.css";

import GenreItem from "../genreItem";

export default class GenreToggle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  onSelect = (index) => this.setState({ index });

  getSelectedGenre = (id) => id === this.state.index && "selectedGenre";

  render() {
    return (
      <ul className="genreList">
        {this.props.genreList.map((genre) => (
         <GenreItem key={genre.id} genre={genre} onSelect={this.onSelect} getSelectedGenre={this.getSelectedGenre}/>
        ))}
      </ul>
    );
  }
}
