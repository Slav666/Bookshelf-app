import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import UserContext from "../../context/user-context";
import useRemoveBookFromUser from "../../hooks/useRemoveBookFromUser";
import useFinishedBookFromUser from "../../hooks/useFinishBookFromUser";
import { Button } from "../../lib/lib";
const SingleReadBook = ({ book }) => {
    const { user, setUser } = useContext(UserContext);
    const { mutateAsync: removeBook } = useRemoveBookFromUser();
    const { mutateAsync: finishedBook } = useFinishedBookFromUser();
    const removeBookFromUserHandler = async () => {
        if (user) {
            const result = await removeBook({
                bookToDeleteId: book.id,
                userId: user.id,
            });
            setUser(result);
        }
    };
    const addFinishedBookHandler = async () => {
        if (user) {
            const result = await finishedBook({
                ...user,
                finishedBooks: [...user.finishedBooks, book],
                books: user.books.filter((testBook) => testBook.id !== book.id),
            });
            setUser(result);
        }
    };
    return (_jsx("div", { className: "relative m-12 flex max-w-screen-lg items-center justify-end", children: _jsxs("section", { className: "grid min-h-[270px] grow grid-cols-[140px,1fr] gap-10 rounded-md border border-black p-5 text-white", children: [_jsx("img", { alt: `${book.title} book cover`, className: "max-h-full w-full", src: book.coverImageUrl }), _jsxs("div", { children: [_jsx("h2", { className: "text-xl font-bold text-blue-500", children: book.title }), _jsx("p", { className: "mt-2 text-sm italic", children: book.author }), _jsxs("small", { children: [book.synopsis.substring(0, 500), "..."] })] }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Button, { variant: "primary", onClick: removeBookFromUserHandler, children: "Remove book" }), _jsx(Button, { variant: "primary", onClick: addFinishedBookHandler, children: "Finished Book." })] })] }) }));
};
export default SingleReadBook;
