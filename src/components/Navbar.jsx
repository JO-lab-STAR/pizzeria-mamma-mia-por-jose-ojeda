const Navbar = ({ setView }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span
        className="navbar-brand"
        style={{ cursor: "pointer" }}
        onClick={() => setView("home")}
      >
        🍕 Pizzería Mamma Mía
      </span>

      <div className="d-flex gap-2">
        {/* Siempre visibles */}
        <button
          className="btn btn-outline-light"
          onClick={() => setView("home")}
        >
          🍕 Home
        </button>

        <button
          className="btn btn-outline-light"
          onClick={() => setView("cart")}
        >
          🛒 Total: ${total.toLocaleString()}
        </button>

        {/* Condicional por token */}
        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-light"
              onClick={() => setView("login")}
            >
              🔐 Login
            </button>
            <button
              className="btn btn-outline-light"
              onClick={() => setView("register")}
            >
              🔐 Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




