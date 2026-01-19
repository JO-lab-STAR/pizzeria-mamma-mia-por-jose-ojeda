import { createContext, useState } from "react";

const CartContext = createContext();
export { CartContext };

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Añadir producto al carrito
  const addToCart = (pizza) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === pizza.id);
      if (found) {
        return prev.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { ...pizza, count: 1 }];
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (pizzaId) => {
    setCart((prev) => prev.filter((item) => item.id !== pizzaId));
  };

  // Cambiar cantidad de un producto
  const changeCount = (pizzaId, amount) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === pizzaId ? { ...item, count: item.count + amount } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeCount, total }}>
      {children}
    </CartContext.Provider>
  );
};
