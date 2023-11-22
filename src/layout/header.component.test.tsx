import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "./header.component";

describe("Header", () => {
  it("should render the header", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { name: /Welcome to Bookshelf App/i })
    ).toBeInTheDocument();
  });
});
