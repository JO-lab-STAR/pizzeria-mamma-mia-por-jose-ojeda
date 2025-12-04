import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  // Controlar qué página mostrar
  const [currentPage, setCurrentPage] = useState("home"); 
  // valores posibles: "home", "login", "register"

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar onChangePage={setCurrentPage} />

      <main className="flex-fill">
        {currentPage === "home" && <Home />}
        {currentPage === "login" && <LoginPage />}
        {currentPage === "register" && <RegisterPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;


