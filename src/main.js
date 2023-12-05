import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./mocks/browser";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataProvider } from "./context/user-context";
import "./index.css";
const query = new QueryClient();
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(QueryClientProvider, { client: query, children: _jsx(DataProvider, { children: _jsx(App, {}) }) }) }));
// Don't use MSW when docker running, only during local development.
// if (import.meta.env.VITE_USE_MSW) {
//   const { worker } = await import('~/mocks/browser');
//   worker.start();
// }
worker.start();
