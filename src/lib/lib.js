import { jsx as _jsx } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
const Button = ({ children, onClick, disabled, variant, type, }) => {
    const getColorClasses = () => {
        switch (variant) {
            case "primary":
                return "bg-blue-500 hover:bg-blue-600";
            case "secondary":
                return "bg-gray-500 hover:bg-gray-600";
            case "success":
                return "bg-green-500 hover:bg-green-600";
            case "danger":
                return "bg-red-500 hover:bg-red-600";
            default:
                return "bg-blue-500 hover:bg-blue-600";
        }
    };
    return (_jsx("button", { className: `rounded px-4 py-2 text-white ${getColorClasses()} ${disabled ? "cursor-not-allowed opacity-50" : ""}`, disabled: disabled, type: type, onClick: onClick, children: children }));
};
const Input = styled.input({
    borderRadius: "3px",
    border: "1px solid #f1f1f4",
    background: "#f1f2f7",
    padding: "8px 12px",
    color: "red",
});
const FormGroup = ({ children }) => (_jsx("div", { className: "flex flex-col", children: children }));
const Link = styled(RouterLink)({
    color: "pink",
    ":hover": {
        color: "yellow",
        textDecoration: "underline",
    },
});
function FullPageSpinner() {
    return (_jsx("div", { className: "flex h-screen flex-col items-center justify-center text-4xl", "data-testid": "spiner", children: _jsx(FaSpinner, { "aria-label": "loading", className: "animate-spin", style: { animationDuration: "1s", animationIterationCount: "infinite" } }) }));
}
export { Button, Input, FormGroup, FullPageSpinner, Link };
