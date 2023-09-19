import React from "react";

import { Link, LinkProps } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

const NavLink = (
  props: JSX.IntrinsicAttributes &
    LinkProps &
    React.RefAttributes<HTMLAnchorElement>
) => {
  return (
    <Link
      className="my-5 block h-full w-full rounded-md border-l-4 border-transparent px-4 py-2 text-white hover:bg-gray-500 hover:text-black hover:no-underline"
      {...props}
    />
  );
};

export const Nav = () => {
  return (
    <nav className=" rounded-md border border-black px-6 py-4 bg-red-300">
      <ul>
        <li>
          <NavLink to="/reading-books-list">Reading List</NavLink>
        </li>
        <li>
          <NavLink to="/finished-books-list">Finished Books</NavLink>
        </li>
        <li>
          <NavLink to="/discover">Discover</NavLink>
        </li>
      </ul>
    </nav>
  );
};
