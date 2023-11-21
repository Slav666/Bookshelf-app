import {
  useState,
  createContext,
  FC,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import useLoginUser from "../hooks/useLoginHook";
import { IUser } from "../../src/utils/interface";

export type AuthenticationContextType = {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  onSubmit?: (userLoginValues: LoginCredentials) => Promise<object> | undefined;
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
  const [user, setUser] = useState<IUser | null>(null);
  const { mutateAsync: login } = useLoginUser();

  const onSubmit = async (
    userLoginValues: LoginCredentials
  ): Promise<object> => {
    const response = await login({
      ...userLoginValues,
    });

    // Make sure response has all properties expected in IUser
    const validatedResponse: IUser = response as unknown as IUser;
    setUser(validatedResponse);

    return validatedResponse;
  };

  return (
    <UserContext.Provider value={{ user, setUser, onSubmit }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
