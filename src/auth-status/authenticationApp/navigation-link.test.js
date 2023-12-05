import { jsx as _jsx } from "react/jsx-runtime";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Nav } from "./navigation-links";
describe("Nav", () => {
    it("should renders navigation links correctly", () => {
        render(_jsx(MemoryRouter, { children: _jsx(Nav, {}) }));
        const readingListLink = screen.getByText("Reading List");
        const finishedBooksLink = screen.getByText("Finished Books");
        const discoverLink = screen.getByText("Discover");
        expect(readingListLink).toBeInTheDocument();
        expect(finishedBooksLink).toBeInTheDocument();
        expect(discoverLink).toBeInTheDocument();
    });
    it("should navigates to the correct route when a link is clicked", () => {
        render(_jsx(MemoryRouter, { children: _jsx(Nav, {}) }));
        const readingListLink = screen.getByText("Reading List");
        const finishedBooksLink = screen.getByText("Finished Books");
        const discoverLink = screen.getByText("Discover");
        expect(window.location.pathname).toBe("/");
        readingListLink.click();
        expect(window.location.pathname).toBe("/reading-books-list");
        finishedBooksLink.click();
        expect(window.location.pathname).toBe("/finished-books-list");
        discoverLink.click();
        expect(window.location.pathname).toBe("/discover");
    });
});
