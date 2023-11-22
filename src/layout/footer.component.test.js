import { jsx as _jsx } from "react/jsx-runtime";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./footer.component";
describe("Footer", () => {
    it("should render the footer", () => {
        render(_jsx(Footer, {}));
        expect(screen.getByRole("heading", { name: /Footer/i })).toBeInTheDocument();
    });
});
