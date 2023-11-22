import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import { DiscoverBooksScreen } from "../../components/search-books/discover-book-screen";
import { ReadingListScreen } from "../../components/reading-books/reading-books-list";
import FinishedListBooks from "../../components/finished-books/finished-books-list";
export const AppRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { element: _jsx(ReadingListScreen, {}), path: "/reading-books-list" }), _jsx(Route, { element: _jsx(FinishedListBooks, {}), path: "/finished-books-list" }), _jsx(Route, { element: _jsx(DiscoverBooksScreen, {}), path: "/discover" })] }));
};
