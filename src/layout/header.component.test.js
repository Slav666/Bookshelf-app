import { jsx as _jsx } from "react/jsx-runtime";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./header.component";
describe("Header", () => {
    it("should render the header", () => {
        render(_jsx(Header, {}));
        expect(screen.getByRole("heading", { name: /Welcome to Bookshelf App/i })).toBeInTheDocument();
    });
});
