import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { Toast } from "react-bootstrap";

import "./movieListItemMenu.css";

const MovieListItemMenu = ({ id, handleEditMovie, handleDeleteMovie }) => {
  const [show, setShow] = useState(true);
  const toggleMenu = () => setShow(!show);

  return (
    <div className="MovieListItemMenu">
      <button className="MovieListItemMenu-Toggle" onClick={toggleMenu}>
        <ThreeDotsVertical />
      </button>
      <Toast onClose={toggleMenu} show={!show}>
        <Toast.Header />
        <Toast.Body>
          <ul className="MovieListItemMenu-Controls">
            <li>
              <span
                onClick={() => handleEditMovie(id)}
                className="Controls-Span"
              >
                Edit
              </span>
            </li>
            <li>
              <span
                onClick={() => handleDeleteMovie(id)}
                className="Controls-Span"
              >
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
