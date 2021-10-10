import React from "react";
import PropTypes from "prop-types";

import Title from "../title";
import GenresDescription from "../genresDescription";

import "./movieDetails.css";

const MovieDetails = ({
  movie: {
    posterPath,
    voteAverage,
    genres,
    releaseDate,
    runtime,
    overview,
    title,
    tagline,
  },
}) => (
  <div className="MovieDetails">
    <div
      style={{
        backgroundImage: `url(${posterPath})`,
      }}
      className="MovieDetails-Container"
    ></div>
    <div className="MovieDetails-Info">
      <Title>
        {title}
        <div className="MovieDetails-Circle">
          <p className="MovieDetails-Score">{voteAverage}</p>
        </div>
      </Title>
      <GenresDescription genres={genres} />
      <p className="MovieDetails-Info-Tagline">{tagline}</p>
      <p className="MovieDetails-Info-TimeAndReleaseDate">
        {releaseDate.slice(0, 4)}
        <span className="MovieDetails-Info-Time">{runtime} min</span>
      </p>
      <p className="MovieDetails-Info-Overview">{overview}</p>
    </div>
  </div>
);

MovieDetails.propTypes = {
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

export default MovieDetails;
