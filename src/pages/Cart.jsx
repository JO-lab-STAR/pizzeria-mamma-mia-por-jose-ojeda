import { useCart } from "../context/useCart";
import { useUser } from "../context/useUser";

import { useState } from "react";

const Cart = () => {
  const { cart, changeCount, removeFromCart, total } = useCart();
  const { token } = useUser();
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);
    setSuccessMsg("");
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ cart })
      });
      const data = await res.json();
      if (res.ok) {
        setSuccessMsg("¡Compra realizada con éxito! 🥳");
      } else {
        setSuccessMsg(data.error || "Error al realizar la compra.");
      }
    } catch (err) {
      setSuccessMsg("Error de conexión.");
    }
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito</h2>

      {cart.length === 0 && <p>El carrito está vacío.</p>}

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between border p-3 mb-2"
        >
          <div className="d-flex align-items-center gap-3">
            <img src={pizza.img} alt={pizza.name} width="80" />
            <h5>{pizza.name}</h5>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-danger"
              onClick={() => changeCount(pizza.id, -1)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              className="btn btn-success"
              onClick={() => changeCount(pizza.id, 1)}
            >
              +
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => removeFromCart(pizza.id)}
            >
              Eliminar
            </button>
          </div>

          <div>
            <strong>${(pizza.price * pizza.count).toLocaleString("es-CL")}</strong>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <h4>Total: ${total.toLocaleString("es-CL")}</h4>
        <button
          className="btn btn-primary mt-2"
          disabled={!token || loading || cart.length === 0}
          onClick={handlePay}
        >
          {loading ? "Procesando..." : "Pagar"}
        </button>
        {!token && (
          <div className="text-danger mt-2">
            Debes iniciar sesión para pagar.
          </div>
        )}
        {successMsg && (
          <div className="alert alert-success mt-2">{successMsg}</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
