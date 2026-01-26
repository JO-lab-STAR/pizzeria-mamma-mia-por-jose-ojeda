import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/pizzas/${id}`
        );
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando pizza...</p>;
  if (!pizza) return <p>Error al cargar la pizza</p>;

  return (
    <div style={styles.container}>
      <img src={pizza.img} alt={pizza.name} style={styles.img} />

      <div style={styles.info}>
        <h2>{pizza.name}</h2>
        <p>{pizza.desc}</p>

        <h4>Ingredientes:</h4>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <h3>$ {pizza.price.toLocaleString("es-CL")}</h3>

        <button style={styles.button}>Añadir al carrito</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "30px",
    padding: "40px",
    alignItems: "center",
  },
  img: {
    width: "400px",
    borderRadius: "12px",
  },
  info: {
    maxWidth: "500px",
  },
  button: {
    marginTop: "15px",
    padding: "10px 18px",
    backgroundColor: "#d62828",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Pizza;
