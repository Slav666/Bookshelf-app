import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import UserContext from "../../context/user-context";
import { Nav } from "../authenticationApp/navigation-links";
import { AppRoutes } from "./app-routes";
import { useNavigate } from "react-router-dom";
import { Button } from "../../lib/lib";
const AuthenticatedApp = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const handleLoggedOut = () => {
        setUser(null);
        navigate("/");
    };
    return (_jsxs("div", { className: "bg-gray-400", children: [_jsx("div", { className: "absolute top-40 right-10 flex items-center", children: _jsx(Button, { variant: "secondary", onClick: handleLoggedOut, children: "Logout" }) }), _jsxs("div", { className: "mx-auto flex w-full max-w-7xl flex-col  p-8 md:flex-row", children: [_jsx("div", { className: "mx-auto max-h-[300px]  max-w-[300px] md:w-1/4", children: _jsx(Nav, {}) }), _jsx("main", { className: " md:w-3/4", children: _jsx(AppRoutes, {}) })] })] }));
};
export { AuthenticatedApp };
