import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import UserContext from "../../context/user-context";
import SingleReadBook from "./reading-book";
const ReadingListScreen = () => {
    const { user } = useContext(UserContext);
    return (_jsx(_Fragment, { children: user?.books.length === 0 ? (_jsx("div", { className: "flex h-[60vh] items-center justify-center", children: _jsx("p", { className: "text-2xl", children: "No reading books" }) })) : (_jsx("ul", { children: user?.books.map((book) => (_jsx(SingleReadBook, { book: book, bookToDeleteId: 0 }, book.id))) })) }));
};
export { ReadingListScreen };
