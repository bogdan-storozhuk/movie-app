import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchForm from "./";
import { renderWithRouter } from "../../utils";

describe("SearchForm", () => {
  const searchExample = "search example";
  it("should match snapshot with empty search value", () => {
    const { asFragment } = renderWithRouter(<SearchForm search="" />);

    expect(asFragment(<SearchForm />)).toMatchSnapshot();
  });

  it("should match snapshot with not empty search value", () => {
    const { asFragment } = renderWithRouter(
      <SearchForm search={searchExample} />
    );

    expect(asFragment(<SearchForm />)).toMatchSnapshot();
  });

  it("should correctly handle handleChange event", () => {
    renderWithRouter(<SearchForm search="" />);
    const input = screen.queryByPlaceholderText("What do you want to watch?");
    expect(input).toBeInTheDocument();
    userEvent.type(input, searchExample);
    expect(input.value).toBe(searchExample);
  });
});
