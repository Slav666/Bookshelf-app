import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UserContext from "./context/user-context";
import { AuthenticatedApp } from "./auth-status/authenticationApp/authenticationApp";
import { UnauthenticatedApp } from "./auth-status/unauthenticationApp/unauthenticationApp";
import Header from "./layout/header.component";
import Footer from "./layout/footer.component";
const App = () => {
    const { user } = useContext(UserContext);
    return (_jsxs("div", { className: "flex min-h-screen flex-col", children: [_jsx(Header, {}), _jsxs("div", { className: "flex-1", children: [user ? (_jsx(Router, { children: _jsx(AuthenticatedApp, {}) })) : (_jsx(UnauthenticatedApp, {})), _jsx(Footer, {})] })] }));
};
export default App;
