import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import UserContext from "../../context/user-context";
import FinishedSingleBook from "./finished-book";
const FinishedListBooks = () => {
    const { user } = useContext(UserContext);
    return (_jsx(_Fragment, { children: user?.finishedBooks.length === 0 ? (_jsx("div", { className: "flex h-[60vh] items-center justify-center", children: _jsx("p", { className: "text-2xl", children: "No finished books" }) })) : (_jsx("ul", { children: user?.finishedBooks.map((finishedBook) => 
            // Check if finishedBook has the required properties
            Object.keys(finishedBook).length !== 0 ? (_jsx(FinishedSingleBook, { finishedBook: finishedBook }, finishedBook.id)) : null) })) }));
};
export default FinishedListBooks;
