import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import "./deleteConformation.css";

const DeleteConformation = ({ id, deleteMovieStart }) => {
  const handleDelete = () => {
    deleteMovieStart(id);
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
  id: PropTypes.number,
  deleteMovieStart: PropTypes.func,
};

export default DeleteConformation;
