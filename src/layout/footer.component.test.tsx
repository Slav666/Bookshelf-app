import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Footer from "./footer.component";

describe("Footer", () => {
  it("should render the footer", () => {
    render(<Footer />);

    expect(
      screen.getByRole("heading", { name: /Footer/i })
    ).toBeInTheDocument();
  });
});
