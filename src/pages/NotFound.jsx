import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: 80 }}>
    <h1>404 - Página no encontrada 🍕</h1>
    <p>¡Oops! La ruta que buscas no existe.</p>
    <Link to="/" style={{ color: "#e74c3c", fontWeight: "bold" }}>
      Volver al inicio
    </Link>
  </div>
);

export default NotFound;
