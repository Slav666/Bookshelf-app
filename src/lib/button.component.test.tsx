import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Button } from "./lib";

describe("Submit Button", () => {
  it("should render a submit button with text only", () => {
    render(<Button variant="primary">Test text</Button>);
    expect(
      screen.getByRole("button", { name: "Test text" })
    ).toBeInTheDocument();
  });

  it("should render a submit button in the disabled state", () => {
    render(
      <Button variant="secondary" disabled>
        Test text
      </Button>
    );
    expect(screen.getByRole("button", { name: "Test text" })).toBeDisabled();
  });

  it("should render a submit button in the enabled state", () => {
    render(<Button variant="secondary">Test text</Button>);
    expect(screen.getByRole("button", { name: "Test text" })).toBeEnabled();
  });
});
