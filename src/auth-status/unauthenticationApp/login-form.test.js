import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { LoginForm } from "./loginForm";
const USER_TEXT = "testUser";
const PASSWORD_TEXT = "testPassword";
const queryClient = new QueryClient();
const wrapper = ({ children }) => (_jsx(QueryClientProvider, { client: queryClient, children: children }));
describe("Login Form Component", () => {
    const user = { username: "testUser", password: "testPassword" };
    const onSubmit = vi.fn((values) => values);
    it("should render a form", () => {
        render(_jsx(LoginForm, { user: user, onSubmit: onSubmit }), { wrapper });
        expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
    });
    it("should call `onSubmit` function when form is valid and `Login` button clicked", async () => {
        render(_jsx(LoginForm, { user: user, onSubmit: onSubmit }), { wrapper });
        await userEvent.type(screen.getByPlaceholderText("username"), USER_TEXT);
        await userEvent.type(screen.getByPlaceholderText("password"), PASSWORD_TEXT);
        userEvent.click(screen.getByRole("button", { name: "Log in" }));
        await waitFor(() => expect(onSubmit).toHaveBeenCalledWith(user));
    });
    it("should enable `Login` button when form is valid", async () => {
        render(_jsx(LoginForm, { user: user, onSubmit: onSubmit }), { wrapper });
        expect(screen.getByRole("button", { name: "Log in" })).toBeDisabled();
        await userEvent.type(screen.getByPlaceholderText("username"), "testUser");
        await userEvent.type(screen.getByPlaceholderText("password"), "testPassword");
        expect(userEvent.click(screen.getByRole("button", { name: "Log in" })))
            .toBeEnabled;
    });
    it("should disable `login`button when form is invalid", async () => {
        render(_jsx(LoginForm, { user: user, onSubmit: onSubmit }), { wrapper });
        const loginButton = screen.getByRole("button", { name: "Log in" });
        expect(loginButton).toBeDisabled();
        await userEvent.type(screen.getByPlaceholderText("username"), "te");
        await userEvent.type(screen.getByPlaceholderText("password"), "te");
        expect(userEvent.click(loginButton)).toBeDisabled;
    });
});
