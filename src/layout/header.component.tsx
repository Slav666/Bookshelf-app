import { FC, ReactElement } from "react";

const Header: FC = (): ReactElement => {
  return (
    <header className="p-10 bg-red-500 flex items-center justify-center">
      <h1>Hello User</h1>
    </header>
  );
};

export default Header;
