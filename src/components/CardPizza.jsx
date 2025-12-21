const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div style={styles.card}>
      <img src={img} alt={name} style={styles.img} />

      <h3>{name}</h3>

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>🍕 {ingredient}</li>
        ))}
      </ul>

      <h4>$ {price.toLocaleString("es-CL")}</h4>

      <div style={styles.buttons}>
        <button>Ver más</button>
        <button>Añadir</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
  },
  img: {
    width: "100%",
    borderRadius: "10px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
};

export default CardPizza;
