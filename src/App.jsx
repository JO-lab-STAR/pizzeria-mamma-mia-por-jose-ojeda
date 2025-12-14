import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  // control de vistas
  const [view, setView] = useState("home");
  // valores posibles: home | cart | login | register

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar setView={setView} />

      <main className="flex-fill">
        {view === "home" && <Home />}
        {view === "cart" && <Cart />}
        {view === "login" && <LoginPage />}
        {view === "register" && <RegisterPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;



