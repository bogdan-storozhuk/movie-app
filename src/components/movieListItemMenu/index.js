import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { Toast } from "react-bootstrap";

import "./movieListItemMenu.css";

const MovieListItemMenu = ({ id, handleEditMovie, handleDeleteMovie }) => {
  const [show, setShow] = useState(true);
  const onToggleMenu = (e) => {
    e.stopPropagation();
    setShow(!show);
  };
  const onEditMovieClick = (e) => {
    e.stopPropagation();
    handleEditMovie(id);
  };
  const onDeleteMovieClick = (e) => {
    e.stopPropagation();
    handleDeleteMovie(id);
  };

  return (
    <div className="MovieListItemMenu">
      <button className="MovieListItemMenu-Toggle" onClick={onToggleMenu}>
        <ThreeDotsVertical />
      </button>
      <Toast onClose={onToggleMenu} show={!show}>
        <Toast.Header />
        <Toast.Body>
          <ul className="MovieListItemMenu-Controls">
            <li>
              <span onClick={onEditMovieClick} className="Controls-Span">
                Edit
              </span>
            </li>
            <li>
              <span onClick={onDeleteMovieClick} className="Controls-Span">
                Delete
              </span>
            </li>
          </ul>
        </Toast.Body>
      </Toast>
    </div>
  );
};

MovieListItemMenu.propTypes = {
  id: PropTypes.number,
  handleEditMovie: PropTypes.func,
  handleDeleteMovie: PropTypes.func,
};

export default MovieListItemMenu;
