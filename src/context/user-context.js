import { jsx as _jsx } from "react/jsx-runtime";
import { useState, createContext, } from "react";
import useLoginUser from "../hooks/useLoginHook";
const UserContext = createContext({
    user: null,
    setUser: () => null,
});
export const AuthenticationContext = createContext(null);
AuthenticationContext.displayName = "AuthenticationContext";
export const DataProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const { mutateAsync: login } = useLoginUser();
    const onSubmit = async (userLoginValues) => {
        const response = await login({
            ...userLoginValues,
        });
        // Make sure response has all properties expected in IUser
        const validatedResponse = response;
        setUser(validatedResponse);
        return validatedResponse;
    };
    return (_jsx(UserContext.Provider, { value: { user, setUser, onSubmit }, children: children }));
};
export default UserContext;
