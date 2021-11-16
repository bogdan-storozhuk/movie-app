import React from "react";
import { render } from "@testing-library/react";

import NotFound from "./";

describe("NotFound", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<NotFound>Example</NotFound>);

    expect(asFragment(<NotFound>Example</NotFound>)).toMatchSnapshot();
  });
});
