import { useEffect } from "react";
import { useUser } from "../context/useUser";

const Profile = () => {
  const { email, logout, getProfile, profile } = useUser();

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: "60px auto", textAlign: "center" }}>
      <h2>Perfil de Usuario</h2>
      <p>Email: <strong>{email || (profile && profile.email) || "No autenticado"}</strong></p>
      <button
        style={{ marginTop: 20, padding: "10px 30px", background: "#e74c3c", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
