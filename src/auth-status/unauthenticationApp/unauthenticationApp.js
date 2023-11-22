import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "../../lib/lib";
import { Logo } from "../../assets/logo";
import { LoginForm } from "./loginForm";
import { RegisterForm } from "./registerForm";
const UnauthenticatedApp = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const handleLoginClick = () => {
        setShowLoginForm(true);
        setShowRegisterForm(false);
    };
    const handleRegisterClick = () => {
        setShowLoginForm(false);
        setShowRegisterForm(true);
    };
    const handleLoginFormClose = () => {
        setShowLoginForm(false);
    };
    const handleRegisterFormClose = () => {
        setShowRegisterForm(false);
    };
    return (_jsxs("div", { className: "flex h-[80vh] flex-col items-center justify-center bg-black p-5", children: [_jsx(Logo, { height: "80", width: "80" }), _jsx("h1", { className: "m-4 p-4", children: "Bookshelf" }), !showLoginForm && !showRegisterForm && (_jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "secondary", onClick: handleLoginClick, children: "Login" }), _jsx(Button, { variant: "primary", onClick: handleRegisterClick, children: "Register" })] })), showLoginForm && (_jsxs("div", { className: "mb-5 rounded-md border border-gray-300 p-5", children: [_jsxs("header", { className: "flex items-center justify-between  bg-gray-200 p-2", children: [_jsx("h2", { className: "text-black", children: "Login" }), _jsx(Button, { variant: "primary", onClick: handleLoginFormClose, children: _jsx("span", { children: "\u00D7" }) })] }), _jsx("div", { children: _jsx(LoginForm, { onSubmit: () => { }, user: { username: "", password: "" } }) })] })), showRegisterForm && (_jsxs("div", { className: "mb-5 rounded-md border border-gray-300 p-5", children: [_jsxs("header", { className: " flex items-center justify-between bg-gray-200 p-4", children: [_jsx("h2", { className: "text-black", children: "Register" }), _jsx(Button, { variant: "primary", onClick: handleRegisterFormClose, children: _jsx("span", { children: "\u00D7" }) })] }), _jsx("div", { children: _jsx(RegisterForm, {}) })] }))] }));
};
export { UnauthenticatedApp };
