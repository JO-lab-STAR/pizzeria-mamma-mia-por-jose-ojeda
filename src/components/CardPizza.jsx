import { formatPrice } from "../utils/formatPrice";

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <div className="card shadow-sm" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={name} />

            <div className="card-body">
                <h5 className="card-title text-center">{name}</h5>

                <hr />

                <h6>Ingredientes:</h6>
                <ul>
                    {ingredients.map((ing, index) => (
                        <li key={index}>{ing}</li>
                    ))}
                </ul>

                <h4 className="text-center fw-bold">${formatPrice(price)}</h4>

                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-outline-primary">Ver más 👀</button>
                    <button className="btn btn-primary">Añadir 🛒</button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;
