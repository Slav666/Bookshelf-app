import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const NavLink = (props) => {
    return (_jsx(Link, { className: "my-5 block h-full w-full rounded-md border-l-4 border-transparent px-4 py-2 text-white hover:bg-gray-500 hover:text-black hover:no-underline", ...props }));
};
export const Nav = () => {
    return (_jsx("nav", { className: " rounded-md border border-black px-6 py-4", children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(NavLink, { to: "/reading-books-list", children: "Reading List" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/finished-books-list", children: "Finished Books" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/discover", children: "Discover" }) })] }) }));
};
