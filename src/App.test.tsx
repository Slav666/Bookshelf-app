import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const query = new QueryClient();
describe("App", () => {
  it("should render the whole app", () => {
    render(
      <QueryClientProvider client={query}>
        <App />,
      </QueryClientProvider>
    );

    expect(
      screen.getByRole("heading", { name: "Hello User" })
    ).toBeInTheDocument();
  });
});
