import { FC, ReactElement, useContext } from "react";
import { Logo } from "../assets/logo";
import UserContext from "../context/user-context";

const Header: FC = (): ReactElement => {
  const { user } = useContext(UserContext);

  return (
    <header className="header flex items-center justify-center space-x-2 bg-gray-500 p-5">
      {/* <header className="bg-gray-500 flex p-10 "> */}
      <Logo height="40" width="40" />
      <h2>Welcome to Bookshelf App. </h2>
      <h1 className="text-center">
        {user ? user.username : <p>You need to log in!</p>}
      </h1>
    </header>
  );
};

export default Header;
