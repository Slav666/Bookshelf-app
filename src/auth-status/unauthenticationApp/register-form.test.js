import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RegisterForm } from "./registerForm";
const queryClient = new QueryClient();
const wrapper = ({ children }) => (_jsx(QueryClientProvider, { client: queryClient, children: children }));
describe("<UserRegistration />", () => {
    it("shows the user registration form", () => {
        render(_jsx(RegisterForm, {}), { wrapper });
        expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("confirmPassword")).toBeInTheDocument();
    });
    it("calls onSubmit with the form values on successful completion", async () => {
        const onSubmit = vi.fn((values) => values);
        const registerValues = {
            username: "testUser",
            password: "password",
            confirmPassword: "password",
        };
        render(_jsx(RegisterForm, {}), { wrapper });
        await userEvent.type(screen.getByPlaceholderText("username"), registerValues.username);
        await userEvent.type(screen.getByPlaceholderText("password"), registerValues.password);
        await userEvent.type(screen.getByPlaceholderText("confirmPassword"), registerValues.confirmPassword);
        userEvent.click(screen.getByRole("button", { name: "Register" }));
        () => expect(onSubmit).toHaveBeenCalledWith(registerValues);
    });
    // it('shows a loading spinner if loading', () => {
    //   render(<RegisterForm />, { wrapper });
    //   expect(screen.getByTestId('progressbar')).toBeInTheDocument();
    // });
});
