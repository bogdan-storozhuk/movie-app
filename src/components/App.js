import React, { useState, useEffect } from "react";

import Header from "./header";
import MainContent from "./mainContent";
import Footer from "./footer";
import ModalWindow from "./modalWindow";

import { getMovies } from "../services/movieService";
import { ModalTypes } from "../assets/constants";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [modalData, setModalData] = useState({
    showModal: false,
    modalType: null,
    movie: null,
  });
  const [genre, setGenre] = useState("All");

  const handleCloseModal = () => {
    setModalData({
      showModal: false,
      modalType: null,
      movie: null,
    });
  };
  const handleAddNewMovie = () => {
    setModalData({
      showModal: true,
      modalType: ModalTypes.NEW,
      movie: null,
    });
  };
  const handleEditMovie = (id) => {
    setModalData({
      showModal: true,
      modalType: ModalTypes.EDIT,
      movie: movies.find((element) => element.id === id),
    });
  };
  const handleDeleteMovie = (id) => {
    setModalData({
      showModal: true,
      modalType: ModalTypes.DELETE,
      movie: movies.find((element) => element.id === id),
    });
  };
  const handleSelectGenre = (genre) => setGenre(genre);

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  const filterItems = (items, filter) => {
    if (filter === "All") {
      return items;
    }
    const filteredItems = items.filter((item) =>
      item.genres.some((el) => el.name === filter)
    );
    return filteredItems;
  };

  const visibleItems = filterItems(movies, genre);

  return (
    <>
      <Header handleAddNewMovie={handleAddNewMovie} />
      <MainContent
        movies={visibleItems}
        genre={genre}
        isLoading={isLoading}
        handleEditMovie={handleEditMovie}
        handleDeleteMovie={handleDeleteMovie}
        handleSelectGenre={handleSelectGenre}
      />
      <Footer />
      <ModalWindow
        movie={modalData.movie}
        modalType={modalData.modalType}
        show={modalData.showModal}
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default App;
