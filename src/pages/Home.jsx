import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../data/pizzas";

const Home = () => {
    return (
        <>
        <Header/>
        <div className="container d-flex flex-wrap justify-content-center gap-4">
            {pizzas.map((pizza) => (
                <CardPizza
                key={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                />
            ))}
        </div>
        </>
    );
};

export default Home;

