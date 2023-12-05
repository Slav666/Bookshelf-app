interface User {
  id: number;
  username: string;
  password: string;
  books: Book[];
  finishedBooks: Book[];
}

interface Book {
  id: number;
  title: string;
  author: string;
}

let users: User[] = [
  {
    id: 1,
    username: "user1",
    password: "password1",
    books: [],
    finishedBooks: [],
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
    books: [],
    finishedBooks: [],
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    books: [],
    finishedBooks: [],
  },
  {
    id: 4,
    username: "user4",
    password: "password4",
    books: [],
    finishedBooks: [],
  },
];

const getUsers = (): User[] => users;

const getSingleUser = (getUser: {
  username: string;
  password: string;
}): User | undefined => {
  const currentUser = users.find(
    (user) =>
      user.username === getUser.username && user.password === getUser.password
  );
  return currentUser;
};

const registerNewUser = (newUserData: User): User | undefined => {
  if (users.find((user) => user.username === newUserData.username)) {
    alert("User already registered");
    return undefined;
  } else {
    users.push(newUserData);
    return newUserData;
  }
};

const addBookToUser = (userWithNewBook: User): User | undefined => {
  users = users.map((user) =>
    user.username === userWithNewBook.username ? userWithNewBook : user
  );
  const updatedUser = users.find(
    (user) => user.username === userWithNewBook.username
  );
  return updatedUser;
};

const removeBookFromUser = (
  deletionBookId: number,
  userId: number
): User | undefined => {
  const userToUpdate = users.find((user) => user.id === userId);

  if (userToUpdate) {
    const removedBook = userToUpdate.books.filter(
      (book) => book.id !== deletionBookId
    );

    users = users.map((user) =>
      user.id === userId ? { ...user, books: removedBook } : user
    );

    const findNewUser = users.find((user) => user.id === userId);
    return findNewUser;
  }

  return undefined; // User with userId not found
};

const finishedBookFromUser = (userWithFinishedBook: User): User | undefined => {
  users = users.map((user) =>
    user.username === userWithFinishedBook.username
      ? userWithFinishedBook
      : user
  );
  const updatedUser = users.find(
    (user) => user.username === userWithFinishedBook.username
  );
  return updatedUser;
};

const removeFinishedBookFromUser = (
  deletionBookId: number,
  userId: number
): User | undefined => {
  const userToUpdate = users.find((user) => user.id === userId);

  if (userToUpdate) {
    const removedBook = userToUpdate.finishedBooks.filter(
      (book) => book.id !== deletionBookId
    );

    users = users.map((user) =>
      user.id === userId ? { ...user, finishedBooks: removedBook } : user
    );

    const findNewUser = users.find((user) => user.id === userId);
    return findNewUser;
  }

  return undefined;
};

export {
  getSingleUser,
  getUsers,
  registerNewUser,
  addBookToUser,
  removeBookFromUser,
  finishedBookFromUser,
  removeFinishedBookFromUser,
};
