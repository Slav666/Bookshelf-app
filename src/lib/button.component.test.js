import { jsx as _jsx } from "react/jsx-runtime";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./lib";
describe("Submit Button", () => {
    it("should render a submit button with text only", () => {
        render(_jsx(Button, { variant: "primary", children: "Test text" }));
        expect(screen.getByRole("button", { name: "Test text" })).toBeInTheDocument();
    });
    it("should render a submit button in the disabled state", () => {
        render(_jsx(Button, { variant: "secondary", disabled: true, children: "Test text" }));
        expect(screen.getByRole("button", { name: "Test text" })).toBeDisabled();
    });
    it("should render a submit button in the enabled state", () => {
        render(_jsx(Button, { variant: "secondary", children: "Test text" }));
        expect(screen.getByRole("button", { name: "Test text" })).toBeEnabled();
    });
});
