import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito</h2>

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
              onClick={() => decrease(pizza.id)}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              className="btn btn-success"
              onClick={() => increase(pizza.id)}
            >
              +
            </button>
          </div>

          <strong>
            ${(pizza.price * pizza.count).toLocaleString()}
          </strong>
        </div>
      ))}

      <h3 className="mt-4">Total: ${total.toLocaleString()}</h3>
      <button className="btn btn-primary mt-2">Pagar</button>
    </div>
  );
};

export default Cart;

                    

        