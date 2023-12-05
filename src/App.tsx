import { useContext, FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import UserContext from "./context/user-context";
import { AuthenticatedApp } from "./auth-status/authenticationApp/authenticationApp";
import { UnauthenticatedApp } from "./auth-status/unauthenticationApp/unauthenticationApp";
import Header from "./layout/header.component";
import Footer from "./layout/footer.component";

const App: FC = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex full-screen flex-col">
      <Header />
      <div className="flex-1">
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
