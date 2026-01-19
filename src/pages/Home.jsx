import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../data/pizzas";

const Home = () => {
  return (
    <>
      <Header />
      <div style={styles.grid}>
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "40px",
  },
};

export default Home;


