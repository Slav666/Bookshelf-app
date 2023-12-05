import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import useBooks from "../../hooks/useBooks";
import { BookRow } from "./book-row";
const DiscoverBooksScreen = () => {
    const { data: books } = useBooks();
    const [searchQuery, setSearchQuery] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    const filteredBooks = books?.filter((book) => {
        return book?.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return (_jsxs("div", { children: [_jsx("div", { className: "flex items-center justify-center py-8 ", children: _jsx("input", { ref: inputRef, className: " max-w-[800px]  rounded-md border border-gray-300 px-4 py-2 text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "Search books...", type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }) }), filteredBooks?.map((book) => {
                return _jsx(BookRow, { book: book }, book.id);
            })] }));
};
export { DiscoverBooksScreen };
