import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import UserContext from "../../context/user-context";
import useRemoveFinishedBook from "../../hooks/useRemoveFinishBook";
import { Button } from "../../lib/lib";
const FinishedSingleBook = ({ finishedBook }) => {
    const { user, setUser } = useContext(UserContext);
    const { mutateAsync: removeFinishedBook, error, isError, isLoading, } = useRemoveFinishedBook();
    const removeFinishedBookHandler = async () => {
        if (user?.id !== undefined) {
            const result = await removeFinishedBook({
                bookToDeleteId: finishedBook.id,
                userId: user.id,
            });
            console.log(result);
            setUser(result);
        }
    };
    if (isLoading) {
        return _jsx("p", { children: "Loading..." });
    }
    if (isError && error) {
        const errorMessage = error.message;
        return _jsxs("p", { children: ["Error: ", errorMessage] });
    }
    return (_jsx("div", { className: "relative m-12 flex max-w-screen-lg items-center justify-end", children: _jsxs("section", { className: "grid min-h-[270px] grow grid-cols-[140px,1fr] gap-10 rounded-md border border-black p-5 text-white", children: [_jsx("img", { alt: `${finishedBook.title} book cover`, className: "max-h-full w-full", src: finishedBook.coverImageUrl }), _jsxs("div", { children: [_jsx("h2", { className: "text-xl font-bold text-blue-500", children: finishedBook.title }), _jsx("p", { className: "mt-2 text-sm italic", children: finishedBook.author }), _jsxs("small", { children: [finishedBook.synopsis.substring(0, 500), "..."] })] }), _jsx(Button, { variant: "primary", onClick: removeFinishedBookHandler, children: "Remove book" })] }) }));
};
export default FinishedSingleBook;
