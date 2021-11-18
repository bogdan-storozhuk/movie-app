import React from "react";
import { render } from "@testing-library/react";

import Title from "./";

describe("Title", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<Title>Example</Title>);

    expect(asFragment(<Title>Example</Title>)).toMatchSnapshot();
  });
});
