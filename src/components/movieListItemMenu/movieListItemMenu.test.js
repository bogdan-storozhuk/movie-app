import React from "react";
import { Provider } from "react-redux";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureMockStore from "redux-mock-store";

import MovieListItemMenu from "./";

const mockStore = configureMockStore();
const store = mockStore({});

describe("MovieListItemMenu", () => {
  const openEditMovieModal = jest.fn();
  const openDeleteMovieModal = jest.fn();
  const id = 2;
  it("should match snapshot with closed Toast Menu", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MovieListItemMenu
          id={id}
          openEditMovieModal={openEditMovieModal()}
          openDeleteMovieModal={openDeleteMovieModal()}
        />
      </Provider>
    );

    expect(
      asFragment(
        <MovieListItemMenu
          id={id}
          openEditMovieModal={openEditMovieModal()}
          openDeleteMovieModal={openDeleteMovieModal()}
        />
      )
    ).toMatchSnapshot();
  });

  it("should match snapshot with open Toast Menu", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MovieListItemMenu
          id={id}
          openEditMovieModal={openEditMovieModal()}
          openDeleteMovieModal={openDeleteMovieModal()}
        />
      </Provider>
    );
    const button = screen.queryByTestId("movie-list-item-toggle");
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(
      asFragment(
        <MovieListItemMenu
          id={id}
          openEditMovieModal={openEditMovieModal()}
          openDeleteMovieModal={openDeleteMovieModal()}
        />
      )
    ).toMatchSnapshot();
  });

  it("should correctly handle openEditMovieModal event", () => {
    render(
      <Provider store={store}>
        <MovieListItemMenu
          id={id}
          openEditMovieModal={openEditMovieModal()}
          openDeleteMovieModal={openDeleteMovieModal()}
        />
      </Provider>
    );

    const toggleButton = screen.queryByTestId("movie-list-item-toggle");
    expect(toggleButton).toBeInTheDocument();
    userEvent.click(toggleButton);

    const span = screen.queryByText("Edit");
    expect(span).toBeInTheDocument();
    userEvent.click(span);
    expect(openEditMovieModal).toHaveBeenCalled();
  });

  it("should correctly handle openDeleteMovieModal event", () => {
    render(
      <Provider store={store}>
        <MovieListItemMenu
          id={id}
          openEditMovieModal={openEditMovieModal()}
          openDeleteMovieModal={openDeleteMovieModal()}
        />
      </Provider>
    );

    const toggleButton = screen.queryByTestId("movie-list-item-toggle");
    expect(toggleButton).toBeInTheDocument();
    userEvent.click(toggleButton);

    const span = screen.queryByText("Delete");
    expect(span).toBeInTheDocument();
    userEvent.click(span);
    expect(openDeleteMovieModal).toHaveBeenCalled();
  });
});
