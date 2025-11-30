import { formatPrice } from "../utils/formatPrice";

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-dark bg-dark px-4">
            <span className="navbar-brand mb-0 h1">🍕 Pizzería Mamma Mía</span>

            <div className="d-flex gap-2">

                {/* Siempre visibles */}
                <button className="btn btn-outline-light">🍕 Home</button>
                <button className="btn btn-outline-light">
                    🛒 Total: ${formatPrice(total)}
                </button>

                {/* Condicionales según token */}
                {token ? (
                <>
                    <button className="btn btn-outline-light">🔓 Profile</button>
                    <button className="btn btn-outline-light">🔒 Logout</button>
                </>
                ) : (
                <>
                    <button className="btn btn-outline-light">🔐 Login</button>
                    <button className="btn btn-outline-light">🔐 Register</button>
                </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
