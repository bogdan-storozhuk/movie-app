import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import OverviewTextarea from "./";

describe("OverviewTextarea", () => {
  const props = {
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    name: "overview",
    value: "",
  };
  const filledValue = "test";
  it("should match snapshot with empty value", () => {
    const { asFragment } = render(<OverviewTextarea {...props} />);

    expect(asFragment(<OverviewTextarea {...props} />)).toMatchSnapshot();
  });

  it("should match snapshot with empty value", () => {
    const { asFragment } = render(
      <OverviewTextarea {...props} value={filledValue} />
    );

    expect(
      asFragment(<OverviewTextarea {...props} value={filledValue} />)
    ).toMatchSnapshot();
  });

  it("should correctly handle handleChange event", () => {
    render(<OverviewTextarea {...props} value="" />);
    const textarea = screen.queryByDisplayValue("");
    expect(textarea).toBeInTheDocument();
    userEvent.type(textarea, filledValue);
    expect(props.handleChange).toHaveBeenCalled();
  });
});
