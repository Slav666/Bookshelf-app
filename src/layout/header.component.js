import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { Logo } from "../assets/logo";
import UserContext from "../context/user-context";
const Header = () => {
    const { user } = useContext(UserContext);
    return (_jsxs("header", { className: "header flex items-center justify-center space-x-2 bg-gray-500 p-5", children: [_jsx(Logo, { height: "40", width: "40" }), _jsx("h2", { children: "Welcome to Bookshelf App. " }), _jsx("h1", { className: "text-center", children: user ? user.username : _jsx("p", { children: "You need to log in!" }) })] }));
};
export default Header;
