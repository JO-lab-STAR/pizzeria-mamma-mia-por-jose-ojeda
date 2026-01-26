import { useState } from "react";
import { useUser } from "../context/useUser";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [message, setMessage] = useState("");
    const [msgType, setMsgType] = useState(""); // "success" | "error"
    const { login } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if (!email || !password || !confirmPassword) {
            setMsgType("error");
            setMessage("Todos los campos son obligatorios.");
            return;
        }

        if (password.length < 6) {
            setMsgType("error");
            setMessage("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            setMsgType("error");
            setMessage("Las contraseñas no coinciden.");
            return;
        }

        // Éxito
        setMsgType("success");
        setMessage("Registro exitoso 🎉");
        login();
    };

    return (
        <div className="container mt-4" style={{ maxWidth: "500px" }}>
            <h2 className="text-center mb-4">Registro</h2>

            {message && (
                <div
                    className={`alert ${
                        msgType === "success" ? "alert-success" : "alert-danger"
                    }`}
                >
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="card card-body shadow">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tuemail@mail.com"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="mínimo 6 caracteres"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
