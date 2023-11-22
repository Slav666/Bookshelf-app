import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import UserContext from "../../context/user-context";
import useAddBookToUser from "../../hooks/useAddBookToUser";
import { Button } from "../../lib/lib";
const BookRow = ({ book }) => {
    const { user, setUser } = useContext(UserContext);
    const { mutateAsync } = useAddBookToUser();
    const isBookAdded = !!user?.books.find((userBook) => userBook.id === book.id);
    const addBookToUserHandler = async () => {
        if (user) {
            const result = await mutateAsync({
                ...user,
                books: [...user.books, book],
            });
            setUser(result);
        }
    };
    return (_jsxs("div", { className: "mx-auto my-4 max-w-[500px] rounded-[20px] border-2 border-solid border-black p-4 bg-slate-600", children: [_jsx("div", { className: "flex items-center justify-center ", children: _jsx("img", { alt: `${book.title} book cover`, className: "max-h-[250px] w-auto", src: book.coverImageUrl }) }), _jsxs("div", { className: "mt-4 text-center", children: [_jsx("h2", { className: "text-xl font-bold text-blue-500", children: book.title }), _jsx("div", { className: "text-sm text-gray-600", children: book.author }), _jsxs("small", { className: "mt-2 block", children: [book.synopsis.substring(0, 700), "..."] })] }), _jsx("div", { className: "mt-4 text-center", children: _jsx(Button, { disabled: isBookAdded, variant: "primary", onClick: addBookToUserHandler, children: isBookAdded ? "Book Added" : "Add book to reading" }) })] }));
};
export { BookRow };
