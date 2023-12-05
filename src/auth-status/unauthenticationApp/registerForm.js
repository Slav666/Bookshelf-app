import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useRegisterUser from "../../hooks/useRegisterHook";
import { Input, Button, FullPageSpinner, FormGroup } from "../../lib/lib";
const registerSchema = yup
    .object({
    username: yup.string().min(3).required(),
    password: yup.string().min(5).required(),
    confirmPassword: yup
        .string()
        .required("Please retype your password.")
        .oneOf([yup.ref("password")], "Your passwords do not match."),
})
    .required();
export const RegisterForm = () => {
    const { mutateAsync, status } = useRegisterUser();
    const isLoading = status === "loading";
    const onSubmit = async (userRegisterValues) => {
        delete userRegisterValues.confirmPassword;
        await mutateAsync({
            ...userRegisterValues,
            books: [],
            finishedBooks: [],
        });
        resetField("username");
        resetField("password");
        resetField("confirmPassword");
    };
    const { register, handleSubmit, resetField, setFocus, formState: { errors, isDirty, isValid }, } = useForm({
        resolver: yupResolver(registerSchema),
    });
    useEffect(() => {
        setFocus("username");
    }, [setFocus]);
    return (_jsxs("form", { className: "flex flex-col items-stretch", onSubmit: handleSubmit((values) => onSubmit(values)), children: [_jsxs(FormGroup, { children: [_jsx("label", { htmlFor: "username", children: "Username" }), _jsx(Input, { placeholder: "username", ...register("username") }), errors.username && (_jsx("p", { className: "p-2 text-red-500", children: errors.username.message }))] }), _jsxs(FormGroup, { children: [_jsx("label", { htmlFor: "password", children: "Password" }), _jsx(Input, { placeholder: "password", type: "password", ...register("password") }), errors.password && (_jsx("p", { className: "p-2 text-red-500", children: errors.password.message }))] }), _jsxs(FormGroup, { children: [_jsx("label", { htmlFor: "password", children: "Confirm Password" }), _jsx(Input, { placeholder: "confirmPassword", type: "password", ...register("confirmPassword") }), errors.confirmPassword && (_jsx("p", { className: "p-2 text-red-500", children: errors.confirmPassword.message }))] }), _jsxs("div", { className: "p-2", children: [_jsx(Button, { disabled: !isDirty && !isValid, type: "submit", variant: "primary", children: "Register" }), isLoading ? _jsx(FullPageSpinner, {}) : null] })] }));
};
