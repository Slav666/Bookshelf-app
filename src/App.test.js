import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
const query = new QueryClient();
describe("App", () => {
    it("should render the whole app", () => {
        render(_jsxs(QueryClientProvider, { client: query, children: [_jsx(App, {}), ","] }));
        expect(screen.getByRole("heading", { name: "Footer" })).toBeInTheDocument();
    });
});
