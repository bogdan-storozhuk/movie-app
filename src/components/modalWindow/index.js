import React, { memo } from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

import MovieForm from "../movieForm";
import DeleteConformation from "../deleteConformation";
import Title from "../title";

import { ModalTypes } from "../../assets/constants";

import "./modalWindow.css";

const ModalWindow = ({ handleClose, show, modalType, movie }) => {
  let titleMessage;
  if (modalType === ModalTypes.NEW) {
    titleMessage = "ADD MOVIE";
  } else if (modalType === ModalTypes.EDIT) {
    titleMessage = "EDIT MOVIE";
  } else if (modalType === ModalTypes.DELETE) {
    titleMessage = "DELETE MOVIE";
  }
  return (
    <Modal
      className="ModalWindow"
      show={show}
      onHide={handleClose}
      centered
      size={modalType === ModalTypes.DELETE ? "md" : "lg"}
    >
      <Modal.Header className="ModalWindow-Header" closeButton>
        <Title>{titleMessage}</Title>
      </Modal.Header>
      <Modal.Body className="ModalWindow-Body">
        {modalType === ModalTypes.DELETE ? (
          <DeleteConformation handleClose={handleClose} movie={movie} />
        ) : (
          <MovieForm handleClose={handleClose} movie={movie} />
        )}
      </Modal.Body>
    </Modal>
  );
};

ModalWindow.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  modalType: PropTypes.string,
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

export default memo(ModalWindow);
