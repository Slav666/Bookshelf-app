import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useContext } from "react";
import DataContext from "../../context/user-context";
import { Input, Button, FullPageSpinner, FormGroup } from "../../lib/lib";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useRegisterUser from "../../hooks/useRegisterHook";
const loginSchema = yup
    .object({
    username: yup.string().min(3).required(),
    password: yup.string().min(5).required(),
})
    .required();
export const LoginForm = () => {
    const { register, handleSubmit, setFocus, formState: { errors, isDirty }, } = useForm({
        resolver: yupResolver(loginSchema),
    });
    const { status } = useRegisterUser();
    const { onSubmit } = useContext(DataContext);
    const isLoading = status === "loading";
    useEffect(() => {
        setFocus("username");
    }, [setFocus]);
    return (_jsxs("form", { className: "flex flex-col items-stretch p-2", onSubmit: handleSubmit((values) => onSubmit && onSubmit({ email: "", ...values })), children: [_jsxs(FormGroup, { children: [_jsx("label", { htmlFor: "username", children: "Username" }), _jsx(Input, { placeholder: "username", ...register("username") }), errors.username && (_jsx("p", { className: "p-2 text-red-500", children: errors.username.message }))] }), _jsxs(FormGroup, { children: [_jsx("label", { htmlFor: "password", children: "Password" }), _jsx(Input, { placeholder: "password", type: "password", ...register("password") }), errors.password && (_jsx("p", { className: "p-2 text-red-500", children: errors.password.message }))] }), _jsxs("div", { className: "p-2", children: [_jsx(Button, { disabled: !isDirty || !!Object.keys(errors).length, type: "submit", variant: "primary", children: "Log in" }), isLoading ? _jsx(FullPageSpinner, {}) : null] })] }));
};
