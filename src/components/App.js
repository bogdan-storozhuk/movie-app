import React, { useState, useCallback } from "react";

import Header from "./header";
import MainContent from "./mainContent";
import Footer from "./footer";
import ModalWindow from "./modalWindow";

import movieData from "../assets/data/movies.json";
import { useFetch } from "../hooks";
import { ModalTypes } from "../assets/constants";

const App = () => {
  const { data: movies, isLoading, error } = useFetch(movieData);
  const [modalData, setModalData] = useState({
    showModal: false,
    modalType: null,
    movie: null,
  });
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("releaseDate");

  const handleCloseModal = useCallback(() => {
    setModalData({
      showModal: false,
      modalType: null,
      movie: null,
    });
  }, []);

  const handleAddNewMovie = useCallback(() => {
    setModalData({
      showModal: true,
      modalType: ModalTypes.NEW,
      movie: null,
    });
  }, []);

  const handleEditMovie = useCallback(
    (id) => {
      setModalData({
        showModal: true,
        modalType: ModalTypes.EDIT,
        movie: movies.find((element) => element.id === id),
      });
    },
    [movies]
  );

  const handleDeleteMovie = useCallback(
    (id) => {
      setModalData({
        showModal: true,
        modalType: ModalTypes.DELETE,
        movie: movies.find((element) => element.id === id),
      });
    },
    [movies]
  );

  const handleSelectGenre = useCallback((genre) => {
    setGenre(genre);
  }, []);

  const handleSelectSortBy = useCallback((e) => {
    setSortBy(e.target.value);
  }, []);

  const handleSubmitSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleSelectMovie = useCallback(
    (id) => {
      setMovie(movies.find((element) => element.id === id));
    },
    [movies]
  );

  const filterItems = (items, filter) => {
    if (filter === "All") {
      return items;
    }
    const filteredItems = items.filter((item) =>
      item.genres.some((el) => el.name === filter)
    );
    return filteredItems;
  };

  const searchItems = (items, search) => {
    if (search?.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  const sortItems = (items, sortBy) => {
    if (sortBy === "releaseDate") {
      items.sort(
        (movieA, movieB) =>
          new Date(movieB.releaseDate) - new Date(movieA.releaseDate)
      );
      return items;
    }
    items.sort((movieA, movieB) => movieB[sortBy] - movieA[sortBy]);
    return items;
  };

  const visibleItems = sortItems(
    searchItems(filterItems(movies, genre), search),
    sortBy
  );

  return (
    <>
      <Header
        handleSubmitSearch={handleSubmitSearch}
        handleAddNewMovie={handleAddNewMovie}
        handleSelectMovie={handleSelectMovie}
        movie={movie}
      />
      <MainContent
        movies={visibleItems}
        genre={genre}
        sortBy={sortBy}
        isLoading={isLoading}
        handleEditMovie={handleEditMovie}
        handleDeleteMovie={handleDeleteMovie}
        handleSelectGenre={handleSelectGenre}
        handleSelectSortBy={handleSelectSortBy}
        handleSelectMovie={handleSelectMovie}
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
