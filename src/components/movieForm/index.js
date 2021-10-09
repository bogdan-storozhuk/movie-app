import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import { formFields } from "../../assets/constants";

import MovieFormField from "../movieFormField";

import "./movieForm.css";

const MovieForm = ({ handleClose, movie }) => {
  const [formData, setFormData] = useState({
    title: "",
    releaseDate: "",
    movieUrl: "",
    rating: "",
    genre: [],
    runtime: "",
    overview: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeGenre = (genres) => {
    setFormData({ ...formData, genre: genres });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    if (movie) {
      const {
        title,
        releaseDate,
        posterPath,
        voteAverage,
        genres,
        runtime,
        overview,
      } = movie;
      setFormData({
        title: title,
        releaseDate: releaseDate,
        movieUrl: posterPath,
        rating: voteAverage,
        genre: genres,
        runtime: runtime,
        overview: overview,
      });
    }
  }, [movie]);

  return (
    <form className="MovieForm" onSubmit={handleSubmit}>
      <div className="MovieForm-MovieFormFields">
        {formFields.map(({ name, text, id }) => (
          <MovieFormField
            key={id}
            onChange={name === "genre" ? handleChangeGenre : handleChangeInput}
            name={name}
            value={formData[name]}
            text={text}
          />
        ))}
      </div>
      <MovieFormField
        onChange={handleChangeInput}
        name="overview"
        value={formData.overview}
        text={"OVERVIEW"}
      />
      <div className="MovieForm-Controls">
        <Button
          className="MovieForm-Controls-Submit"
          type="submit"
          variant="primary"
        >
          SUBMIT
        </Button>
        <Button
          className="MovieForm-Controls-Reset"
          variant="secondary"
          onClick={handleClose}
        >
          RESET
        </Button>
      </div>
    </form>
  );
};

MovieForm.propTypes = {
  handleClose: PropTypes.func,
  movie: PropTypes.shape({
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

export default MovieForm;
