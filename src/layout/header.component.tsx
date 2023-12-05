import { FC, ReactElement, useContext } from "react";
import UserContext from "../../src/context/user-context";

const Header: FC = (): ReactElement => {
  const { user } = useContext(UserContext);
  return (
    <header className="p-10 bg-gray-500 flex items-center justify-center">
      <h1>Hello User: {user?.username}</h1>
    </header>
  );
};

export default Header;
