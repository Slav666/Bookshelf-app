// import { useState, createContext, FC, Dispatch, ReactNode } from "react";

// import useLoginUser from "../hooks/useLoginHook";
// import { IUser } from "../../src/utils/interface";

// export type AuthenticationContextType = {
//   user: IUser | null;
//   setUser: Dispatch<IUser | null>;
//   onSubmit?: (userLoginValues: string) => Promise<void>;
// };

// const UserContext = createContext<AuthenticationContextType>({
//   user: null,
//   setUser: () => null,
// });

// interface Props {
//   children: ReactNode;
// }

// export const AuthenticationContext =
//   createContext<AuthenticationContextType | null>(null);
// AuthenticationContext.displayName = "AuthenticationContext";

// export const DataProvider: FC<Props> = ({ children }) => {
//   const [user, setUser] = useState<IUser>();
//   console.log("user", user);
//   const { mutateAsync: login } = useLoginUser();

//   const onSubmit = async (userLoginValues: AuthenticationContextType) => {
//     const response = await login({ ...userLoginValues });
//     setUser(response);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, onSubmit }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;
import { useState, createContext, FC, Dispatch, ReactNode } from "react";
import useLoginUser from "../hooks/useLoginHook";
import { IUser } from "../../src/utils/interface";

export type AuthenticationContextType = {
  user: IUser | null;
  setUser: Dispatch<IUser | null>;
  onSubmit?: (userLoginValues: object) => Promise<object>;
};

interface LoginCredentials {
  email: string;
  password: string;
}

const UserContext = createContext<AuthenticationContextType>({
  user: null,
  setUser: () => null,
});

interface Props {
  children: ReactNode;
}

export const AuthenticationContext =
  createContext<AuthenticationContextType | null>(null);
AuthenticationContext.displayName = "AuthenticationContext";

export const DataProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null); // Initialize user as null
  console.log("user", user);
  const { mutateAsync: login } = useLoginUser();

  const onSubmit = async (userLoginValues: LoginCredentials) => {
    const response = await login({
      ...userLoginValues,
    });
    setUser(response);
    console.log("response", response);
  };

  return (
    <UserContext.Provider value={{ user, setUser, onSubmit }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
