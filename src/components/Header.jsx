const Header = () => {
    return (
        <header
            className="text-white text-center p-5 mb-4"
            style={{
                backgroundImage: "url('/images/Header.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "0 0 20px 20px",
            }}
        >
            <h1 className="fw-bold">¡Pizzería Mamma Mía!</h1>
            <p>Tenemos las mejores pizzas que podrás encontrar</p>
        </header>
   );
};

export default Header;

