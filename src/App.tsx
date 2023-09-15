import { FC, ReactElement } from "react";

import Footer from "./layout/footer.component";
import Header from "./layout/header.component";

const App: FC = (): ReactElement => (
  <div className="flex min-h-screen flex-col w-screen">
    <Header />

    <main className="grow bg-yellow-300">
      <h2>Main Content</h2>

      <button onClick={() => console.log("BUTTON CLICKED")}>
        <span>Click Me</span>
      </button>
    </main>

    <Footer />
  </div>
);

export default App;
