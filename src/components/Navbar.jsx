const Navbar = ({ onChangePage }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="navbar-brand" style={{ cursor: "pointer" }} onClick={() => onChangePage("home")}>
        🍕 Home
      </div>

      <div className="d-flex gap-2">
        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-light"
              onClick={() => onChangePage("login")}
            >
              🔐 Login
            </button>

            <button
              className="btn btn-outline-light"
              onClick={() => onChangePage("register")}
            >
              🔐 Register
            </button>
          </>
        )}

        <button className="btn btn-outline-light">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



