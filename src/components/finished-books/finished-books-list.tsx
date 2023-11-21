import { useContext, FC, ReactElement } from "react";

import UserContext from "../../context/user-context";
import FinishedSingleBook from "./finished-book";
import { IBook } from "../../utils/interface";

const FinishedListBooks: FC = (): ReactElement => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user?.finishedBooks.length === 0 ? (
        <div className="flex h-[60vh] items-center justify-center">
          <p className="text-2xl">No finished books</p>
        </div>
      ) : (
        <ul>
          {user?.finishedBooks.map((finishedBook) =>
            // Check if finishedBook has the required properties
            Object.keys(finishedBook).length !== 0 ? (
              <FinishedSingleBook
                key={finishedBook.id}
                finishedBook={finishedBook as IBook}
              />
            ) : null
          )}
        </ul>
      )}
    </>
  );
};

export default FinishedListBooks;
