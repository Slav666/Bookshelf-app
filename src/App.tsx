// import { FC, ReactElement } from "react";

// import Footer from "./layout/footer.component";
// import Header from "./layout/header.component";

// const App: FC = (): ReactElement => (
//   <div className="flex min-h-screen flex-col w-screen">
//     <Header />

//     <main className="grow bg-yellow-300">
//       <h2>Main Content</h2>

//       <button onClick={() => console.log("BUTTON CLICKED")}>
//         <span>Click Me</span>
//       </button>
//     </main>

//     <Footer />
//   </div>
// );

// export default App;
import React, { useContext, FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import UserContext from "./context/user-context";
import { AuthenticatedApp } from "./auth-status/authenticationApp/authenticationApp";
import { UnauthenticatedApp } from "./auth-status/unauthenticationApp/unauthenticationApp";
import Header from "./layout/header.component";
import Footer from "./layout/footer.component";

const App: FC = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="h-full">
        {user ? (
          <Router>
            <AuthenticatedApp />
          </Router>
        ) : (
          <UnauthenticatedApp />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
