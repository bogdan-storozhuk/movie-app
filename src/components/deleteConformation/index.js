import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import "./deleteConformation.css";

const DeleteConformation = ({ selectedMovie }) => {
  const handleDelete = () => {
    console.log(`delete`, selectedMovie);
  };
  return (
    <>
      <p className="DeleteConformation-Message">
        Are you sure you want to delete this movie?
      </p>
      <div className="DeleteConformation-Button-Wrapper">
        <Button onClick={handleDelete} className="DeleteConformation-Button">
          Confirm
        </Button>
      </div>
    </>
  );
};

DeleteConformation.propTypes = {
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

export default DeleteConformation;
