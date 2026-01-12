const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div style={styles.card}>
      <img src={img} alt={name} style={styles.img} />

      <h3>{name}</h3>

      <ul style={styles.ingredientList}>
  {ingredients.map((ingredient, index) => (
    <li key={index} style={styles.ingredientItem}>🍕 {ingredient}</li>
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
  ingredientList: {
  listStyle: "none",
  padding: 0,
  margin: "10px 0",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "8px",
},
ingredientItem: {
  background: "#f8f8f8",
  borderRadius: "6px",
  padding: "2px 10px",
  fontSize: "15px",
  display: "flex",
  alignItems: "center",
  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
},
};

export default CardPizza;
