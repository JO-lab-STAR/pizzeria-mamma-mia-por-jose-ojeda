import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" style={{ textDecoration: "none", color: "white" }} to="/">
        🍕 Pizzería Mamma Mía
      </Link>

      <div className="d-flex gap-2">
        {/* Siempre visibles */}
        <Link className="btn btn-outline-light" to="/">
          🍕 Home
        </Link>

        <Link className="btn btn-outline-light" to="/cart">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>

        {/* Condicional por token */}
        {token ? (
          <>
            <Link className="btn btn-outline-light" to="/profile">🔓 Profile</Link>
            <button className="btn btn-outline-light" onClick={logout}>🔒 Logout</button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light" to="/login">
              🔐 Login
            </Link>
            <Link className="btn btn-outline-light" to="/register">
              🔐 Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




